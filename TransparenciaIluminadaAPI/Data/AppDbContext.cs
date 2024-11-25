using Microsoft.EntityFrameworkCore;
using TransparenciaIluminadaAPI.Models;
namespace TransparenciaIluminadaAPI.Data
{
    public class AppDbContext : DbContext
    {
         public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
         public DbSet<Report> Reports { get; set; }
    }
}

        

