
$('#btnRecuperaSenha').click(function () {
    let emailRecupera = $('#txtEmailRecupera').val();

    var emailRecuperaSenha = {
        Email:emailRecupera
    }

    console.table(emailRecuperaSenha)

})

$('.close').click(function () {
    $('.contentAviso').css({ visibility: "hidden" });
    $('.contentAvisoGenerico').css({ visibility: "hidden" });
    $('.contentModalEditUsuario').css({ visibility: "hidden" });
})


function ready() {

    path = $(location).attr("pathname");
    if ($('#txtSession').val() == '') {
        if (path != '/Home/Login') {
            //window.top.location.href = "/Home/Login"
            //window.top.location.href = "../../index.html";
        }
    } else {
        atribuiNomeDeUsuario();
        $('.sidebar-user').show();
        $('.dropdown-menu').css({ visibility: "visible" });
        $('#nomeUsuario').empty();
        $('#nomeUsuario').append("Mais");
    }

    if (path === '/Home/NovoDocumento') {
        execAPI_ConsultaEstadosBrasil();
    }

    if (path === '/Home/API_PrevTempo') {
        execAPI()
    }

    if (path === '/Home/RelUsuarios') {
        carregaListaDeUsuarios();
    }

}


function atribuiNomeDeUsuario() {

    let dados = JSON.parse($('#txtSession').val());

    $('#JSONNomeUsuario').empty();
    $('#JSONNomeUsuario').append(dados.nome);

}

