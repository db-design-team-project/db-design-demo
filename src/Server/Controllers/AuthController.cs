
using System.Security.Claims;
using System.Text.Json;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase {
    private readonly ILogger _logger;

    public AuthController(
        ILogger<TestController> logger
    ) {
        _logger = logger;
    }

    [HttpPost("login")]
    public async Task<IActionResult> LoginAsync(JsonElement json) {
        string ID = json.GetString("ID") ?? string.Empty;
        string password = json.GetString("password") ?? string.Empty;

        // 유저이름이나 비밀번호가 비어있거나 null 인 경우
        if (string.IsNullOrWhiteSpace(ID) || string.IsNullOrWhiteSpace(password)) {
            return BadRequest("Invalid username or password");
        }

        // TODO: DB 조회해서 유요한 id/password 인지 확인
        
        await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(
            new ClaimsIdentity(
                new Claim[] {
                    new Claim(ClaimTypes.NameIdentifier, ID)
                },
                CookieAuthenticationDefaults.AuthenticationScheme
            )
        ));

        return Ok();
    }

    // [HttpPost("signup")]
    // public ActionResult Signup() {
    //     return Ok();
    // }
}
