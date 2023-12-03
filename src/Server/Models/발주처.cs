using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("발주처")]
public class 발주처 {
    [Key]
    public int 발주처ID { get; set; }

    [Required]
    [StringLength(30)]
    public string 발주처명 { get; set; }
}
