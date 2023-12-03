
using System.Text.Json;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
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

    [HttpGet("vacation-history-employee")]
    public ActionResult VacationHistoryEmployee(string date) {
        DateTime convertedDate = DateTime.Parse(date);

        var entities = (
            from 휴가내역 in _dbContext.휴가내역DbSet
            join 직원 in _dbContext.직원DbSet on 휴가내역.직원ID equals 직원.직원ID
            where (휴가내역.휴가시작날짜 <= convertedDate && 휴가내역.휴가종료날짜 > convertedDate)
            select new {
                휴가ID = 휴가내역.휴가ID,
                직원ID = 휴가내역.직원ID,
                직원명 = 직원.직원명,
                휴가종류 = 휴가내역.휴가종류,
                휴가시작날짜 = 휴가내역.휴가시작날짜.ToString("yyyy-MM-dd"),
                휴가종료날짜 = 휴가내역.휴가종료날짜.ToString("yyyy-MM-dd"),
                업무대리인ID = 휴가내역.업무대리인ID
            }
        );

        return Ok(JsonSerializer.Serialize(entities));
    }
}
