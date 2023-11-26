using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

[PrimaryKey(nameof(프로젝트ID), nameof(직원ID))]
public class 개발자경험 {
    public int 프로젝트ID { get; set; }
    public int 직원ID { get; set; }

    public int? 경력 { get; set; }

    [StringLength(30)] 
    public string? 스킬셋 { get; set; } = string.Empty;


    [ForeignKey("프로젝트ID")]
    public 프로젝트 프로젝트 { get; set; }

    [ForeignKey("직원ID")]
    public 직원 직원 { get; set; }
}
