
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
        var entities = _dbContext.휴가내역DbSet.FromSqlRaw("SELECT * FROM 휴가내역");

        return Ok(entities);
    }
}
