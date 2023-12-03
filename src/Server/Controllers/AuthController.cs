
using System.Security.Claims;
using System.Text.Json;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.DbContexts;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase {
    private readonly ILogger _logger;
    private readonly MainDbContext _dbContext;

    public AuthController(
        ILogger<AuthController> logger,
        MainDbContext dbContext
    ) {
        _logger = logger;
        _dbContext = dbContext;
    }

    [HttpPost("login")]
    public async Task<IActionResult> LoginAsync(JsonElement json) {
        string ID = json.GetString("ID") ?? string.Empty;
        string password = json.GetString("password") ?? string.Empty;

        // 유저이름이나 비밀번호가 비어있거나 null 인 경우
        if (string.IsNullOrWhiteSpace(ID) || string.IsNullOrWhiteSpace(password))
            return BadRequest(JsonSerializer.Serialize(new {
                message = "아이디, 패스워드가 비어있습니다..."
            }));

        // DB 조회해서 유효한 id/password 인지 확인
        var results = _dbContext.회원DbSet.FromSqlInterpolated($"SELECT * FROM 회원 WHERE 아이디 = {ID} AND 비밀번호 = {password} FETCH FIRST 1 ROW ONLY");
        var found = results.Any();
        if (!found) {
            return BadRequest(JsonSerializer.Serialize(new {
                message = "유효한 아이디, 패스워드가 아닙니다..."
            }));
        }

        // 로그인 session 쿠키 생성
        await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(
            new ClaimsIdentity(
                new Claim[] {
                    new Claim(ClaimTypes.NameIdentifier, ID)
                },
                CookieAuthenticationDefaults.AuthenticationScheme
            )
        ));

        // 로그인 쿠키와 함께 response
        return Ok();
    }

    [HttpPost("signup")]
    public async Task<IActionResult> SignupAsync(JsonElement json) {
        string ID = json.GetString("ID") ?? string.Empty;
        string password = json.GetString("password") ?? string.Empty;
        string fullName = json.GetString("fullName") ?? string.Empty;
        string residentNumber = json.GetString("residentNumber") ?? string.Empty;
        string education = json.GetString("education") ?? string.Empty;

        // TODO : db에 직원, 회원 엔티티 추가
        // var newEmployee = new 직원 {
        //     직원명 = fullName,
        //     주민등록번호 = residentNumber,
        //     최종학력 = education,
        //     부서 = null
        // };

        return Ok();
    }

    [HttpGet("logout")]
    public async Task<IActionResult> LogoutAsync() {
        await HttpContext.SignOutAsync();
        return Ok();
    }

    [HttpGet("authenticate")]
    public async Task<IActionResult> AuthenticateAsync() {
        return Ok(JsonSerializer.Serialize(new {
            authenticated = (await HttpContext.AuthenticateAsync(CookieAuthenticationDefaults.AuthenticationScheme)).Succeeded,
            ID = HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier),
        }));
    }
}
