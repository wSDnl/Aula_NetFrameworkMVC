
salvarUsuario();
function salvarUsuario() {

    $('#btnSalvarCad').click(function () {

        let nomeCad = $('#txtNomeCad').val();
        let emailCad = $('#txtEmailCad').val();
        let senhaCad = $('#txtSenhaCad').val();
       
        if ( moduloCadUsuarioVerificaCampos() ) {

            var usuarioCad = {
                Nome: nomeCad,
                Email: emailCad,
                Senha: senhaCad,
            }

            requisicaoAssincrona('POST', '../Home/SalvarUsuario', usuarioCad, sucessoCadastro, erroCadastro);

        }

    })

}

function moduloCadUsuarioVerificaCampos(){

    var valid = true;
    let email = $('#txtEmailCad').val();

    if ( $('#txtNomeCad').val() == '' ) {
        $('.contentAvisoGenerico').css({ visibility: "visible" });
        $('#labelMsgDeErroAvisoGenerico').empty();
        $('#labelMsgDeErroAvisoGenerico').append("Preencha o campo NOME");
        valid = false;
        return valid;
    }
    if ( email == '') {
        $('.contentAvisoGenerico').css({ visibility: "visible" });
        $('#labelMsgDeErroAvisoGenerico').empty();
        $('#labelMsgDeErroAvisoGenerico').append("Preencha o campo E-MAIL");
        valid = false;
        return valid;
    }
    //else {

    //    let emailregex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    //    let resEmailRegex = emailregex.exec(email);

    //    /* REGEX */
    //    if (resEmailRegex) {
    //        avisoEmail = 0;
    //    } else {
    //        avisoEmail = 1;
    //    }
        
    //    if (avisoEmail == 1) {
    //        $('.contentAvisoGenerico').css({ visibility: "visible" });
    //        $('#labelMsgDeErroAvisoGenerico').empty();
    //        $('#labelMsgDeErroAvisoGenerico').append("Formato de E-MAIL inválido");
    //        valid = false;
    //        return valid; 
    //    } 

    //}
    if ( $('#txtSenhaCad').val() == '' ) {
        $('.contentAvisoGenerico').css({ visibility: "visible" });
        $('#labelMsgDeErroAvisoGenerico').empty();
        $('#labelMsgDeErroAvisoGenerico').append("Preencha o campo SENHA");
        valid = false;
        return valid;
    }

    return valid;
}

function sucessoCadastro(json) {
    let obj = json.resultado;
    console.table(obj);
    if ( obj != '0' ) {
        $('.contentAvisoGenerico').css({ visibility: "visible" });
        $('#labelMsgDeErroAvisoGenerico').empty();
        $('#labelMsgDeErroAvisoGenerico').append("Usuário Cadastrado com sucesso");
        $('.form-control').val("");
    }
}

function erroCadastro(json) {

}