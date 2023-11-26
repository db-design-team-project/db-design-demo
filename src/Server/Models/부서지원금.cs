using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class 부서지원금
{
    [Key]
    public int 부서지원금ID { get; set; }

    [Required]
    [StringLength(30)]
    public string 부서명 { get; set; }

    [Required]
    public int 지원금액 { get; set; }

    [Required]
    public DateTime 지급일자 { get; set; }

    [StringLength(50)]
    public string 사용처 { get; set; }


    [ForeignKey("부서명")]
    public 부서 부서 { get; set; }
}
