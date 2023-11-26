using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class 휴가내역 {
    [Key]
    public int 휴가ID { get; set; }

    [Required]
    public int 직원ID { get; set; }

    [Required]
    [StringLength(30)]
    public string 휴가종류 { get; set; }

    [Required]
    public DateTime 휴가시작날짜 { get; set; }

    [Required]
    public DateTime 휴가종료날짜 { get; set; }

    public int? 업무대리인ID { get; set; } // Nullable, as 업무대리인ID is optional

    [ForeignKey("직원ID")]
    public 직원 직원 { get; set; }

    [ForeignKey("업무대리인ID")]
    public 직원? 업무대리인 { get; set; }
}
