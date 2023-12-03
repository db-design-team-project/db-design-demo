using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("부서")]
public class 부서 {
    [Key]
    [StringLength(30)]
    public string 부서명 { get; set; }

    [Required]
    [StringLength(30)]
    public string 부서전화번호 { get; set; }

    [Required]
    [StringLength(30)]
    public string 부서위치 { get; set; }

    [Required]
    public int 부서장 { get; set; }

    [ForeignKey(nameof(부서장))]
    public 직원 부서장직원 { get; set; }
}
