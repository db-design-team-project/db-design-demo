using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("직원급여")]
public class 직원급여 {
    [Key]
    public int 직원급여ID { get; set; }

    [Required]
    public int 직원ID { get; set; }

    [Required]
    public int 지급액 { get; set; }

    [Required]
    public DateTime 지급일자 { get; set; }

    public int? 인센티브 { get; set; } // Nullable, as 인센티브 is optional

    [ForeignKey("직원ID")]
    public 직원 직원 { get; set; }
}
