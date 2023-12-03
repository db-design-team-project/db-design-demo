using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

[PrimaryKey(nameof(평가ID), nameof(평가자발주처ID))]
[Table("고객평가")]
public class 고객평가 {
    public int 평가ID { get; set; }

    [ForeignKey("발주처")]
    public int 평가자발주처ID { get; set; }

    public 평가 평가 { get; set; }

    public 발주처 발주처 { get; set; }
}
