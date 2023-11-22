
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.DbContexts;

[ApiController]
[Route("api/[controller]")]
public class TestController : ControllerBase {
    private readonly ILogger _logger;
    private readonly MainDbContext _dbContext;


    public TestController(
        ILogger<TestController> logger,
        MainDbContext dbContext
    ) {
        _logger = logger;
        _dbContext = dbContext;
    }

    [HttpGet("test")]
    public ActionResult MailAsync() {
        var 회원들 = _dbContext.회원DbSet.FromSqlRaw("SELECT * FROM 회원").ToList();

        foreach (var 회원 in 회원들) {
            System.Console.WriteLine(회원.아이디);
        }
        return Ok("ok~~");
    }
}
