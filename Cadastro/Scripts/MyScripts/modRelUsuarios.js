
function carregaListaDeUsuarios() {
    requisicaoAssincrona('POST' , '../Home/RelUsuarios' , "" , sucessoRelUsuarios , erroRelUsuarios);
}

function sucessoRelUsuarios(json) {
    let obj = json.resultado;
    if (obj == null ) {
        $('#lblDivUsuarios').empty();
        $('#lblDivUsuarios').append("x");
    } else {
        $('#lblDivUsuarios').empty();
        $('#lblDivUsuarios').append(obj);
    }

}

function erroRelUsuarios(json) {
    alert("[ERRO]")
}

function deletaUsuario(id) {

    let classeUsuario = {
        Email: id,
        Nome: "",
        Senha:""
    }

    requisicaoAssincrona('POST', '../Home/DelUsuarios', classeUsuario , sucessoDelUsuarios, erroDelUsuarios);
}

function sucessoDelUsuarios(json) {
    let obj = json.resultado;
    carregaListaDeUsuarios();
}

function erroDelUsuarios(json) {
    alert("[ERRO]")
}

function editaUsuario(id) {
    $('.contentModalEditUsuario').css({ visibility: "visible" });
    let classeUsuario = {
        Email: id,
        Nome:  "",
        Senha: ""
    }

    requisicaoAssincrona('POST', '../Home/editUsuarios', classeUsuario , sucessoEditUsuarios, erroEditUsuarios);
}

function sucessoEditUsuarios(json) {
    let obj = json.resultado;
    $('#contentInputsEditUsuario').empty();
    $('#contentInputsEditUsuario').append(obj);
}

function erroEditUsuarios(json) {
    alert("[ERRO]")
}

function salvarEditDadosUsuario(id) {

    let nome = $('#txtEditUsuarioNome').val();
    let email = $('#txtEditUsuarioEmail').val();

    if (nome != '' && email != '') {

        let classeUsuario = {
            Email: email,
            Nome: nome,
            Senha: id
        }

        requisicaoAssincrona('POST', '../Home/salvaEditUsuarios', classeUsuario, sucessoSalvaEditUsuarios, erroSalvaEditUsuarios);

    } else {
        alert("PREENCHA OS CAMPOS")
    }

}

function sucessoSalvaEditUsuarios(json) {
    let obj = json.resultado;
    if (obj == '1') {
        carregaListaDeUsuarios();
        $('.contentModalEditUsuario').css({ visibility: "hidden" });
        $('#alertEditCadusuario').empty();
        $('#alertEditCadusuario').append("<div class='alert alert-success no-border'><button type='button' class='close' data-dismiss='alert'><span>&times;</span><span class='sr-only'>Close</span></button><span class='text-semibold'>Sucesso</span> Cadastro alterado com sucesso</div>");
        setTimeout(function () {
            $('#alertEditCadusuario').empty();
        }, 3000);
    }
}

function erroSalvaEditUsuarios(json) {
    $('.contentModalEditUsuario').css({ visibility: "hidden" });
    $('#alertEditCadusuario').empty();
    $('#alertEditCadusuario').append("<div class='alert alert-danger no-border'><button type='button' class='close' data-dismiss='alert'><span>&times;</span><span class='sr-only'>Close</span></button><span class='text-semibold'>Erro</span> Algo deu errado, tente novamenmte</div >");
}



    