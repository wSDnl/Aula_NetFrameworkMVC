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

namespace Cadastro.DAL
{
    public class DLL_CadUsuario
    {

        private MySqlConnection conn;

        public string SalvarUsuario(CadUsuario user) {

            var nome  = user.Nome.ToString().ToUpper();
            var email = user.Email.ToString().ToLower();
            var senha = user.Senha;

            try{

                MySqlConnection conn = new MySqlConnection();
                string datacon;
                datacon = ConfigurationManager.ConnectionStrings["MyConn"].ToString();
                conn = new MySqlConnection(datacon);

                // INSERE NOVO REGISTRO
                conn.Open();
                string query = "INSERT INTO usuario(nome, email, senha) VALUES ('"+ nome +"' , '"+ email +"' , '"+ senha +"');";
                using ( MySqlCommand cmd = new MySqlCommand(query, conn)){ 
                    cmd.ExecuteNonQuery();

                    // RETORNA ULTIMO ID INSERIDO
                    if (cmd.LastInsertedId != 0) { 

                        cmd.Parameters.Add(new MySqlParameter("ultimoId", cmd.LastInsertedId));
                        var idNovoUsuario = Convert.ToString(cmd.Parameters["@ultimoId"].Value);
                         
                        return idNovoUsuario;
                    }

                }
                conn.Close();
                return null;

            }
            catch (MySqlException e ){

                return "[ERRO]" + e;
                throw;

            }
        }

        public string LoginUsuario(LoginUsuario user)
        {
            var email = user.Email.ToString().ToLower();
            var senha = user.Senha;

            try
            {

                MySqlConnection conn = new MySqlConnection();
                string datacon;
                datacon = ConfigurationManager.ConnectionStrings["MyConn"].ToString();
                conn = new MySqlConnection(datacon);

                // INSERE NOVO REGISTRO
                conn.Open();
                string idUsuario = null;
                string nomeUsuario = null;
                string query = "SELECT id,nome FROM usuario WHERE email = '"+ email +"' AND senha = '"+ senha +"' ";
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    //cmd.ExecuteNonQuery();
                    MySqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        idUsuario   = reader["id"].ToString();
                        nomeUsuario = reader["nome"].ToString();
                    }
                }

                string str = "{\"id\": \"" + idUsuario + "\", \"nome\": \"" + nomeUsuario + "\" }";

                conn.Close();
                return str;

            }
            catch (MySqlException e)
            {
                return "[ERRO]" + e;
            }

            return null;
        }

        public string RelUsuario(RelUsuarios user)
        {

            try
            {

                MySqlConnection conn = new MySqlConnection();
                string datacon;
                datacon = ConfigurationManager.ConnectionStrings["MyConn"].ToString();
                conn = new MySqlConnection(datacon);

                // INSERE NOVO REGISTRO
                conn.Open();
                string div = null;
                string query = "SELECT * FROM usuario";
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    //cmd.ExecuteNonQuery();
                    MySqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        //div += "id: " + reader["id"].ToString() + " nome: " + reader["nome"].ToString() + "";

                        div += "<div class='col-lg-3 col-md-6'>"+
                                    "<div class='panel panel-body'>"+
                                        "<div class='media'>"+
                                            "<div class='media-left'>"+
                                                "<a href = '../assets/images/placeholder.jpg' data-popup='lightbox'>"+
                                                    "<img src = '../assets/images/placeholder.jpg' class='img-circle img-lg' alt=''>"+
                                                "</a>"+
                                            "</div>"+
                                            "<div class='media-body'>" +
                                                "<h6 class='media-heading'>" + reader["nome"].ToString() + "</h6>"+
                                                "<span class='text-muted'>" + reader["email"].ToString() + "</span>"+
                                            "</div>"+
                                            "<div class='media-right media-middle'>"+
                                                "<ul class='icons-list'>"+
                                                    "<li class='dropdown'>"+
                                                        "<a href = '#' class='dropdown-toggle' data-toggle='dropdown'><i class='icon-menu7'></i></a>"+
                                                        "<ul class='dropdown-menu dropdown-menu-right'>"+
                                                            "<li onclick='deletaUsuario(" + reader["id"].ToString() + ")'><a href='#' ><i class='fa fa-trash pull-right'></i> Deletar</a></li>" +
                                                            "<li onclick='editaUsuario(" + reader["id"].ToString() + ")'><a href='#' ><i class='fa fa-edit pull-right'></i> Editar</a></li>" +
                                                        "</ul>"+
                                                    "</li>"+
                                                "</ul>"+
                                            "</div>"+
                                        "</div>"+
                                      "</div>" +
                                    "</div>";

                    }
                }

                if (string.IsNullOrEmpty(div))
                {
                    div = "<div class='alert alert-danger no-border'> &nbsp;&nbsp;&nbsp; Nenhum Registro encontrado &nbsp;&nbsp;&nbsp; </div>";
                }

                conn.Close();
                return div;

            }
            catch (MySqlException e)
            {
                return "[ERRO]" + e;
            }

            return null;
        }

        public string DelUsuarios(RelUsuarios user)
        {

            string idUsuario = user.Email;

            try
            {

                MySqlConnection conn = new MySqlConnection();
                string datacon;
                datacon = ConfigurationManager.ConnectionStrings["MyConn"].ToString();
                conn = new MySqlConnection(datacon);

                // INSERE NOVO REGISTRO
                conn.Open();
                string query = " DELETE FROM usuario WHERE id = '"+ idUsuario +"' ";
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.ExecuteNonQuery();
                }
                conn.Close();
                return null;

            }
            catch (MySqlException e)
            {

                return "[ERRO]" + e;
                throw;

            }
        }

        public string editUsuarios(RelUsuarios user)
        {

            try
            {

                MySqlConnection conn = new MySqlConnection();
                string datacon;
                datacon = ConfigurationManager.ConnectionStrings["MyConn"].ToString();
                conn = new MySqlConnection(datacon);

                // INSERE NOVO REGISTRO
                conn.Open();
                string div = null;
                string idUsuario = user.Email;
                string query = "SELECT * FROM usuario WHERE id = '"+ idUsuario + "' ";
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    //cmd.ExecuteNonQuery();
                    MySqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        div += "<p>                                                                                                             "+
                               " <div class='col-md-10 col-md-offset-1' style='width:450px; border:0'>                                          " +
                               "         <div class='form-group'>                                                                               " +
                               "             <label>Nome:</label>                                                                               "+
                               "             <input type = 'text' class='form-control'  id='txtEditUsuarioNome' value='"+ reader["nome"].ToString() + "'>"+
                               "         </div>                                                                                                 "+
                               "     </div>                                                                                                     "+
                               " </p>                                                                                                           "+
                               " <p>                                                                                                            "+
                               " <div class='col-md-10 col-md-offset-1' style='width:450px; border:0'>                                          " +
                               "         <div class='form-group'>                                                                               " +
                               "             <label>E-mail:</label>                                                                             "+
                               "             <input type = 'text' class='form-control' id='txtEditUsuarioEmail' value='" + reader["email"].ToString() + "'>" +
                               "         </div>                                                                                                 "+
                               "     </div>                                                                                                     "+
                               " </p>                                                                                                           "+
                               " <div class='text-right'>                                                                                       "+
                               "     <button type = 'submit' class='btn btn-primary' onclick='salvarEditDadosUsuario("+ reader["id"].ToString() +")'>SALVAR</button>"+
                               " </div>";
                    }
                }

                if (string.IsNullOrEmpty(div))
                {
                    div = "<div class='alert alert-danger no-border'> &nbsp;&nbsp;&nbsp; Nenhum Registro encontrado &nbsp;&nbsp;&nbsp; </div>";
                }

                conn.Close();
                return div;

            }
            catch (MySqlException e)
            {
                return "[ERRO]" + e;
            }

            return null;
        }

        public string salvaEditUsuarios(CadUsuario user)
        {

            var nome      = user.Nome.ToString().ToUpper();
            var email     = user.Email.ToString().ToLower();
            var idUsuario = user.Senha;

            try
            {

                MySqlConnection conn = new MySqlConnection();
                string datacon;
                datacon = ConfigurationManager.ConnectionStrings["MyConn"].ToString();
                conn = new MySqlConnection(datacon);

                // INSERE NOVO REGISTRO
                conn.Open();
                string query = " UPDATE usuario SET nome = '"+ nome + "', email = '"+ email +"' WHERE id = '"+ idUsuario + "';  ";
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.ExecuteNonQuery();
                }
                conn.Close();
                return "1";

            }
            catch (MySqlException e)
            {

                return "[ERRO]" + e;
                throw;

            }
        }

    }
}