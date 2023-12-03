using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("경영관리")]
public class 경영관리 {
    [Key]
    public int 직원ID { get; set; }


    [ForeignKey("직원ID")]
    public 직원 직원 { get; set; }
}
