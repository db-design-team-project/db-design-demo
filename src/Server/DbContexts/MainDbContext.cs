using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.DbContexts {
    public class MainDbContext : DbContext {
        public MainDbContext(DbContextOptions<MainDbContext> options) : base(options) { }
        
        public DbSet<회원> 회원DbSet { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            base.OnModelCreating(modelBuilder);
        }
    }
}
