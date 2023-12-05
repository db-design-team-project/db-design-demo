
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

    [HttpGet("client-history")]
    public ActionResult ClientHistory(string clientName) {
        // 데모 1 - 발주 내역 조회
        var rows = (
            from 발주처프로젝트 in _dbContext.발주처_프로젝트DbSet // from Materialized view "발주처_프로젝트"
            where (발주처프로젝트.발주처명 == clientName) // 발주처명으로 필터
            select new {
                발주처프로젝트.프로젝트ID,
                발주처프로젝트.프로젝트명,
                착수일자 = 발주처프로젝트.착수일자.ToString("yyyy-MM-dd"),
                종료일자 = 발주처프로젝트.종료일자.HasValue ? 발주처프로젝트.종료일자.Value.ToString("yyyy-MM-dd") : null
            }
        );

        return Ok(JsonSerializer.Serialize(rows));
    }

    [HttpGet("vacation-history-employee")]
    public ActionResult VacationHistoryEmployee(string date) {
        DateTime convertedDate = DateTime.Parse(date);

        // 데모 2 - 휴가 내역 조회
        var rows = (
            from 휴가내역 in _dbContext.휴가내역DbSet // from 휴가내역 테이블
            join 휴가직원 in _dbContext.직원DbSet on 휴가내역.직원ID equals 휴가직원.직원ID // 직원 테이블과 join (직원ID)
            join 업무대리인 in _dbContext.직원DbSet on 휴가내역.업무대리인ID equals 업무대리인.직원ID // 직원 테이블과 join (업무대리인ID)
            where (휴가내역.휴가시작날짜 <= convertedDate && 휴가내역.휴가종료날짜 > convertedDate) // 선택된 날의 모든 휴가내역 필터
            select new {
                휴가내역.휴가ID,
                휴가내역.직원ID,
                휴가직원.직원명,
                휴가내역.휴가종류,
                휴가시작날짜 = 휴가내역.휴가시작날짜.ToString("yyyy-MM-dd"),
                휴가종료날짜 = 휴가내역.휴가종료날짜.ToString("yyyy-MM-dd"),
                휴가내역.업무대리인ID,
                업무대리인이름 = 업무대리인.직원명
            }
        );

        return Ok(JsonSerializer.Serialize(rows));
    }

}
