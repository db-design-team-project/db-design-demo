using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

[PrimaryKey(nameof(프로젝트ID), nameof(직원ID))]
public class 투입직원 {
    public int 프로젝트ID { get; set; }
    public int 직원ID { get; set; }

    [Required]
    public DateTime 투입일 { get; set; }

    public DateTime? 종료일 { get; set; }

    [Required]
    [StringLength(30)]
    public string 직무 { get; set; }


    [ForeignKey("프로젝트ID")]
    public 프로젝트 프로젝트 { get; set; }

    [ForeignKey("직원ID")]
    public 직원 직원 { get; set; }
}
