using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TransparenciaIluminadaAPI.Data;
using TransparenciaIluminadaAPI.Models;
namespace TransparenciaIluminadaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportController : ControllerBase
    {
        private readonly AppDbContext _context;
        public ReportController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> CreateReport([FromBody] Report report)
        {
            report.Protocolo = Guid.NewGuid().ToString(); // Gerar um protocolo único
            _context.Reports.Add(report);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetReportByProtocolo), new { protocolo = report.Protocolo }, report);
        }

        [HttpGet("{protocolo}")]
        public async Task<IActionResult> GetReportByProtocolo(string protocolo)
        {
            var report = await _context.Reports.FirstOrDefaultAsync(r => r.Protocolo == protocolo);
            if (report == null)
                return NotFound("Protocolo não encontrado");

            return Ok(report);
        }

    }
}
