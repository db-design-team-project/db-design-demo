using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.DbContexts {
    public class MainDbContext : DbContext {
        public MainDbContext(DbContextOptions<MainDbContext> options) : base(options) { }

        public DbSet<직원> 직원DbSet { get; set; }
        public DbSet<회원> 회원DbSet { get; set; }
        public DbSet<부서> 부서DbSet { get; set; }
        public DbSet<부서지원금> 부서지원금DbSet { get; set; }
        public DbSet<개발> 개발DbSet { get; set; }
        public DbSet<경영관리> 경영관리DbSet { get; set; }
        public DbSet<마케팅> 마케팅DbSet { get; set; }
        public DbSet<연구개발> 연구개발DbSet { get; set; }
        public DbSet<발주처> 발주처DbSet { get; set; }
        public DbSet<프로젝트> 프로젝트DbSet { get; set; }
        public DbSet<투입직원> 투입직원DbSet { get; set; }
        public DbSet<개발자경험> 개발자경험DbSet { get; set; }
        public DbSet<평가> 평가DbSet { get; set; }
        public DbSet<동료평가> 동료평가DbSet { get; set; }
        public DbSet<고객평가> 고객평가DbSet { get; set; }
        public DbSet<PM평가> PM평가DbSet { get; set; }
        public DbSet<직원급여> 직원급여DbSet { get; set; }
        public DbSet<휴가내역> 휴가내역DbSet { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            base.OnModelCreating(modelBuilder);
        }
    }
}
