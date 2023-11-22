using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models;

[Table("회원")]
public class 회원
{
    [Key]
    [Column("회원ID")]
    public int 회원ID { get; set; }

    [Required]
    [Column("아이디")]
    [StringLength(30)]
    public string 아이디 { get; set; }

    [Required]
    [Column("비밀번호")]
    [StringLength(30)]
    public string 비밀번호 { get; set; }
}