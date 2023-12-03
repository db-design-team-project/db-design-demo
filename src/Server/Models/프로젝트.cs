using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("프로젝트")]
public class 프로젝트 {
    [Key]
    public int 프로젝트ID { get; set; }

    [Required]
    [StringLength(30)]
    public string 프로젝트명 { get; set; }

    [Required]
    public DateTime 착수일자 { get; set; }

    public DateTime? 종료일자 { get; set; }

    [Required]
    public int 발주처ID { get; set; }

    [ForeignKey("발주처ID")]
    public 발주처 발주처 { get; set; }
}
