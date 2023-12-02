
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.DbContexts;

[ApiController]
[Route("api/[controller]")]
public class MainController : ControllerBase {
    private readonly ILogger _logger;
    private readonly MainDbContext _dbContext;


    public MainController(
        ILogger<MainController> logger,
        MainDbContext dbContext
    ) {
        _logger = logger;
        _dbContext = dbContext;
    }

    [HttpGet("test")]
    public ActionResult MailAsync() {
        var entities = _dbContext.직원DbSet.FromSqlRaw($"SELECT 회원ID FROM 회원 WHERE 회원ID = ");
        
        JsonSerializer.Serialize(entities);

        return Ok(entities);
    }
}
