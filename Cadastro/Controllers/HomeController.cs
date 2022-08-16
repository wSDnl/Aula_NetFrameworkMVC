using Cadastro.BLL;
using Cadastro.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;



namespace Cadastro.Controllers
{
   
    public class HomeController : Controller
    {

        BLL_CadUsuario bllCadUsuario       = new BLL_CadUsuario();
        BLL_CadUsuario bllRelUsuarios      = new BLL_CadUsuario();
        BLL_CadUsuario bllLoginUsuario     = new BLL_CadUsuario();
        BLL_CadUsuario bllDelUsuario       = new BLL_CadUsuario();
        BLL_CadUsuario bllEditUsuario      = new BLL_CadUsuario();
        BLL_CadUsuario bllSalvaEditUsuario = new BLL_CadUsuario();
        BLL_Documentos bllNovoDocumento    = new BLL_Documentos();
        BLL_Documentos bllAPI_ConsultaEstadosBrasil = new BLL_Documentos();
        BLL_API_PrevTempo bllAPI_PrevTempo = new BLL_API_PrevTempo();

        /* MENU */

            public ActionResult Index()
            {
                return View();
            }
            public ActionResult Login()
            {
                Session["dados"] = null;
                return View();
            }
            public ActionResult CadUsuario()
            {
                return View();
            }
            public ActionResult RelUsuarios()
            {       
                return View();  
            }
            public ActionResult NovoDocumento()
            {
                return View();
            }
            public ActionResult API_PrevTempo()
            {
                return View();
            }

        /* /MENU */

        /* USUARIO */

            [HttpPost]
            public ActionResult SalvarUsuario(CadUsuario user) { 
                var ret = bllCadUsuario.SalvarUsuario(user);
                return Json( new { resultado = ret });
            }
        
            [HttpPost]
            public ActionResult RelUsuarios(RelUsuarios user)
            {
                var ret = bllRelUsuarios.RelUsuario(user);
                return Json(new { resultado = ret });
            }

            [HttpPost]
            public ActionResult LoginUsuario(LoginUsuario user)
            {
                var value = bllLoginUsuario.LoginUsuario(user);
                var session = Session["dados"] = value;
                var ret = value;
                return Json(new { resultado = ret });
            }

            [HttpPost]
            public ActionResult DelUsuarios(RelUsuarios user)
            {
                var value = bllDelUsuario.DelUsuarios(user);
                var ret = value;
                return Json(new { resultado = ret });
            }

            [HttpPost]
            public ActionResult editUsuarios(RelUsuarios user)
            {
                var value = bllEditUsuario.editUsuarios(user);
                var ret = value;
                return Json(new { resultado = ret });
            }

            [HttpPost]
            public ActionResult salvaEditUsuarios(CadUsuario user)
            {
                var value = bllSalvaEditUsuario.salvaEditUsuarios(user);
                var ret = value;
                return Json(new { resultado = ret });
            }

        /* /USUARIO */

        /* DOCUMENTOS */

        [HttpPost]
        public ActionResult SalvaNovoDocumento(Documentos user)
        {
            var value = "Home / SalvaNovoDodumento";//bllNovoDocumento.NovoDocumento(user);
            var ret = value;
            return Json(new { resultado = ret });
        }

        /* /DOCUMENTOS */

        /* PREVISÃO DO TEMPO */

        [HttpPost]
            public ActionResult API_PrevTempo(API_PrevTempo user)
            {
                var value = bllAPI_PrevTempo.API_PrevTempo(user);
                var ret = value;
                return Json(new { resultado = ret });
            }

        /* /PREVISÃO DO TEMPO */

    }
}