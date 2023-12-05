using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

[Table("발주처_프로젝트")]
public class 발주처_프로젝트 {
    public string 발주처_rid { get; set; }
    public string 프로젝트_rid { get; set; }
    public string 발주처명 { get; set; }
    public int 프로젝트ID { get; set; }
    public string 프로젝트명 { get; set; }
    public DateTime 착수일자 { get; set; }
    public DateTime? 종료일자 { get; set; }
}
