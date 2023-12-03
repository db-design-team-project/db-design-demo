using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models;

[Table("회원")]
public class 회원
{
    [Key]
    public int 회원ID { get; set; }

    [Required]
    [StringLength(30)]
    public string 아이디 { get; set; }

    [Required]
    [StringLength(30)]
    public string 비밀번호 { get; set; }


    [ForeignKey(nameof(회원ID))]
    public 직원 직원 { get; set; }
}
