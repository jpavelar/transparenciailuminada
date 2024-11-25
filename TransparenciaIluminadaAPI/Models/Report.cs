namespace TransparenciaIluminadaAPI.Models
{
    public class Report
    {
        public int Id { get; set; } // Chave Primária
        public string Nome { get; set; }
        public string CPF { get; set; }
        public string Telefone { get; set; }
        public string Logradouro { get; set; }
        public string Referencia { get; set; }
        public string TipoLâmpada { get; set; }
        public string TipoProblema { get; set; }
        public string Protocolo { get; set; } // Gerado automaticamente
    }
}
