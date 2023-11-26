using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class 마케팅 {
    [Key]
    public int 직원ID { get; set; }


    [ForeignKey("직원ID")]
    public 직원 직원 { get; set; }
}
