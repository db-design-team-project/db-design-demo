
// using System.Text.Json;
// using Microsoft.AspNetCore.Authentication;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;

// [ApiController]
// [Route("api/[controller]")]
// public class AuthController : ControllerBase {
//     private readonly ILogger _logger;


//     public AuthController(
//         ILogger<TestController> logger
//     ) {
//         _logger = logger;
//     }

//     [HttpPost("login")]
//     public Task<ActionResult> Login(JsonElement json) {
//         var username = json.GetString("username");
//         var password = json.GetString("password");


//         return Ok();
//     }

//     [HttpPost("login")]
//     public ActionResult Signup() {
//         return Ok();
//     }
// }
