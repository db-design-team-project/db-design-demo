using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("직원")]
public class 직원 {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int 직원ID { get; set; }

    [Required]
    [StringLength(30)]
    public string 직원명 { get; set; }

    [Required]
    [StringLength(14)]
    public string 주민등록번호 { get; set; }

    [Required]
    [StringLength(30)]
    public string 최종학력 { get; set; }

    [StringLength(30)]
    [NotMapped]
    public string? 부서 { get; set; }


    [ForeignKey("부서")]
    public 부서 직원부서 { get; set; }
    public ICollection<투입직원> 직원투입 { get; set; }
}
