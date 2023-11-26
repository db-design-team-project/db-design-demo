using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

[PrimaryKey(nameof(평가ID), nameof(평가자직원ID))]
public class 동료평가 {
    public int 평가ID { get; set; }
    [ForeignKey("직원")]
    public int 평가자직원ID { get; set; }


    [ForeignKey("평가ID")]
    public 평가 평가 { get; set; }
    [ForeignKey("평가자직원ID")]
    public 직원 평가자직원 { get; set; }
}
