using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Cadastro.Models
{
    public class Documentos
    {
        public string Id { get; set; }
        public string RazaoSocial { get; set; }
        public string CNPJ { get; set; }
        public string DDD { get; set; }
        public string Telefone { get; set; }
        public string Endereço { get; set; }
        public int Numero { get; set; }
        public string Bairro { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string CEP { get; set; }
        public string EMail { get; set; }
        public string InscricaoEstadual { get; set; }

    }
}