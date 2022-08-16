using Cadastro.DAL;
using Cadastro.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Cadastro.BLL
{
    public class BLL_RelUsuarios
    {
        DLL_CadUsuario dalRelUsuario = new DLL_CadUsuario();

        public string RelUsuarios(CadUsuario user)
        {
            var ret = dalRelUsuario.RelUsuarios(user);
            return ret;
        }

    }
}