
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

    [HttpGet("vacation-history-employee")]
    public ActionResult VacationHistoryEmployee(string date) {
        DateTime convertedDate = DateTime.Parse(date);

        var entities = (
            from 휴가내역 in _dbContext.휴가내역DbSet
            join 직원 in _dbContext.직원DbSet on 휴가내역.직원ID equals 직원.직원ID
            where (휴가내역.휴가시작날짜 <= convertedDate && 휴가내역.휴가종료날짜 > convertedDate)
            select new {
                휴가내역.휴가ID,
                휴가내역.직원ID,
                직원.직원명,
                휴가내역.휴가종류,
                휴가시작날짜 = 휴가내역.휴가시작날짜.ToString("yyyy-MM-dd"),
                휴가종료날짜 = 휴가내역.휴가종료날짜.ToString("yyyy-MM-dd"),
                휴가내역.업무대리인ID
            }
        );

        return Ok(JsonSerializer.Serialize(entities));
    }

    [HttpGet("client-history")]
    public ActionResult ClientHistory(string clientName) {
        var entities = (
            from 발주처프로젝트 in _dbContext.발주처_프로젝트DbSet
            where (발주처프로젝트.발주처명 == clientName)
            select new {
                발주처프로젝트.프로젝트ID,
                발주처프로젝트.프로젝트명,
                착수일자 = 발주처프로젝트.착수일자.ToString("yyyy-MM-dd"),
                종료일자 = 발주처프로젝트.종료일자.HasValue ? 발주처프로젝트.종료일자.Value.ToString("yyyy-MM-dd") : null
            }
        );

        return Ok(JsonSerializer.Serialize(entities));
    }
}
