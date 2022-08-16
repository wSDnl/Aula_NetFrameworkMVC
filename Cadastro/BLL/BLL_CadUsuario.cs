using Cadastro.DAL;
using Cadastro.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Cadastro.BLL
{
    public class BLL_CadUsuario
    {

        DLL_CadUsuario dalCadUsuario       = new DLL_CadUsuario();
        DLL_CadUsuario dalLoginUsuario     = new DLL_CadUsuario();
        DLL_CadUsuario dalRelUsuario       = new DLL_CadUsuario();
        DLL_CadUsuario dalDelUsuario       = new DLL_CadUsuario();
        DLL_CadUsuario dalEditUsuarios        = new DLL_CadUsuario();
        DLL_CadUsuario dalSalvaEditUsuario = new DLL_CadUsuario();


        public string SalvarUsuario( CadUsuario user)
        {
            var ret = dalCadUsuario.SalvarUsuario(user);
            return ret;
        }
        public string LoginUsuario(LoginUsuario user)
        {
            var ret = dalLoginUsuario.LoginUsuario(user);
            return ret;
        }
        public string RelUsuario(RelUsuarios user)
        {
            var ret = dalRelUsuario.RelUsuario(user);
            return ret;
        }

        public string DelUsuarios(RelUsuarios user)
        {
            var ret = dalDelUsuario.DelUsuarios(user);
            return ret;
        }
        public string editUsuarios(RelUsuarios user)
        {
            var ret = dalEditUsuarios.editUsuarios(user);
            return ret;
        }


        public string salvaEditUsuarios(CadUsuario user)
        {
            var ret = dalSalvaEditUsuario.salvaEditUsuarios(user);
            return ret;
        }

    }
}