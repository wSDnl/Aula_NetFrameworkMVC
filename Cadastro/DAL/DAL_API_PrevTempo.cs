using Cadastro.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MySql.Data.MySqlClient;
using System.Configuration;
using System.Data;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using Google.Protobuf.WellKnownTypes;
using RestSharp;
using Method = RestSharp.Method;

namespace Cadastro.DAL
{
    public class DAL_API_PrevTempo
    {
        public string API_PrevTempo(API_PrevTempo user) {
            var client = new RestClient("http://servicos.cptec.inpe.br/XML/cidade/244/previsao.xml");
            //client.Timeout = -1;
            var request = new RestRequest();
            request.AddHeader("Cookie", "JSESSIONID=5D0099900AFA1673C39BBDBCAB9B1822.511");
            RestResponse response = client.Execute(request);
            return response.Content;
        }
    }
}