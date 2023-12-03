using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

[PrimaryKey(nameof(평가ID), nameof(평가자PM직원ID))]
[Table("PM평가")]
public class PM평가 {
    public int 평가ID { get; set; }

    [ForeignKey("직원")]
    public int 평가자PM직원ID { get; set; }

    public 평가 평가 { get; set; }

    public 직원 직원 { get; set; }
}
