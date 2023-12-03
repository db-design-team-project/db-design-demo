using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("평가")]
public class 평가 {
    [Key]
    public int 평가ID { get; set; }

    [Required]
    public int 프로젝트ID { get; set; }

    [Required]
    [ForeignKey("직원")]
    public int 피평가자직원ID { get; set; }

    [Required]
    [StringLength(50)]
    public string 평가종류 { get; set; }

    [Required]
    public int 커뮤니케이션점수 { get; set; }

    [StringLength(150)]
    public string? 커뮤니케이션내용 { get; set; }

    [Required]
    public int 업무점수 { get; set; }

    [StringLength(150)]
    public string? 업무내용 { get; set; }


    [ForeignKey("프로젝트ID")]
    public 프로젝트 프로젝트 { get; set; }

    [ForeignKey("피평가자직원ID")]
    public 직원 피평가자 { get; set; }
}
