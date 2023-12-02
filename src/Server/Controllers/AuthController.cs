
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
        ILogger<TestController> logger,
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

        // TODO: DB 조회해서 유요한 id/password 인지 확인
        var results = _dbContext.회원DbSet.FromSqlInterpolated($"SELECT * FROM 회원 WHERE 아이디 = {ID} AND 비밀번호 = {123}");
        if (results is null)
            return BadRequest(JsonSerializer.Serialize(new {
                message = "유효한 아이디, 패스워드가 아닙니다..."
            }));

        await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(
            new ClaimsIdentity(
                new Claim[] {
                    new Claim(ClaimTypes.NameIdentifier, ID)
                },
                CookieAuthenticationDefaults.AuthenticationScheme
            )
        ));

        return Ok(JsonSerializer.Serialize(new {
            message = "로그인 성공!"
        }));
    }

    // [HttpPost("signup")]
    // public ActionResult Signup() {
    //     return Ok();
    // }
}
