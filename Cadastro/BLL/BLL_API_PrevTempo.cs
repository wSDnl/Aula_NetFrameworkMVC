using Cadastro.DAL;
using Cadastro.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Cadastro.BLL
{
    public class BLL_API_PrevTempo
    {

        DAL_API_PrevTempo dalAPI_PrevTempo = new DAL_API_PrevTempo();
        
        public string API_PrevTempo(API_PrevTempo user)
        {
            var ret = dalAPI_PrevTempo.API_PrevTempo(user);
            return ret;
        }

    }
}