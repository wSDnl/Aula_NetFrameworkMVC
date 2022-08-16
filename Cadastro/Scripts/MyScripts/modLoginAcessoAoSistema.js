
$('#btnLogin').click(function () {

    var email = $('#txtEmailLogin').val();
    var senha = $('#txtSenhaLogin').val();
        
    if (modLoginAcessoAoSistemaVerificaCampos()) {
        var usuarioLogin = {
            Email:email,
            Senha:senha,
        }

        requisicaoAssincrona('POST', '../Home/LoginUsuario', usuarioLogin , sucessoCadastroLogin , erroCadastroLogin);

    }

})

function sucessoCadastroLogin(json) {
    let obj = json.resultado;
    let dados = JSON.parse(obj);
    //console.table(dados)
    if (dados.id != null) {
        window.top.location.href = "/Home/Index"
        //window.top.location.href = "~/index.html"
    } else {
        $('.contentAvisoGenerico').css({ visibility: "visible" });
        $('#labelMsgDeErroAvisoGenerico').empty();
        $('#labelMsgDeErroAvisoGenerico').append("E-mail ou Senha incorreto(s)");
    }
}

function erroCadastroLogin(json) {
    alert("[ ERRO ]")
}

function modLoginAcessoAoSistemaVerificaCampos() {

    var valid = true;
    let email = $('#txtEmailLogin').val();

    if (email == '') {
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

    /*}*/
    if ($('#txtSenhaLogin').val() == '') {
        $('.contentAvisoGenerico').css({ visibility: "visible" });
        $('#labelMsgDeErroAvisoGenerico').empty();
        $('#labelMsgDeErroAvisoGenerico').append("Preencha o campo SENHA");
        valid = false;
        return valid;
    }

    return valid;

}


