

/* requisicaoAssincrona */

$('#btnNovoDocumento').click(function () {

    let RazaoSocial = $('#txtRazaoSocialNovoDocumento').val();
    let CNPJ = $('#txtCNPJNovoDocumento').val();
    let DDD = $('#txtDDDNovoDocumento').val();
    let Telefone = $('#txtTelefoneNovoDocumento').val();
    let Endereco = $('#txtEnderecoNovoDocumento').val();
    let Numero = parseInt( $('#txtNumeroNovoDocumento').val() ); // INT
    let Bairro = $('#txtBairroNovoDocumento').val();
    let Estado = $('#txtEstadoNovoDocumento').val();
    let Cidade = $('#txtCidadeNovoDocumento').val();
    let CEP = $('#txtCEPNovoDocumento').val();
    let EMail = $('#txtEMailNovoDocumento').val();
    let InscricaoEstadual = $('#txtInscricaoEstadualNovoDocumento').val();

    if ($('.NovoDocumento').val() == '') {
        $('.contentAvisoGenerico').css({ visibility: "visible" });
        $('#labelMsgDeErroAvisoGenerico').empty();
        $('#labelMsgDeErroAvisoGenerico').append("Todos os Campos são Obrigatórios");
    } else {

        object = {
            Id: "",
            RazaoSocial: RazaoSocial,
            CNPJ: CNPJ,
            DDD: DDD,
            Telefone: Telefone,
            Endereco: Endereco,
            Numero: Numero,
            Bairro: Bairro,
            Estado: Estado,
            Cidade: Cidade,
            CEP: CEP,
            EMail: EMail,
            InscricaoEstadual: InscricaoEstadual
        }

        requisicaoAssincrona('POST', '../Home/SalvaNovoDocumento', object, sucessoNovoDocumento, erroNovoDocumento );

    }
});

function execAPI_ConsultaEstadosBrasil() {

    var resp = null;
    const select = document.querySelector('#selEstadoNovoDocumento');
    select.options[select.options.length] = new Option('Selecione um Estado', '0');
    select.options[select.options.length] = new Option('São Paulo', '35');

    var settings = {
        "url": "https://servicodados.ibge.gov.br/api/v1/localidades/distritos",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {

        $(response).each(function (i, e) {
            //console.log(response[0].municipio.microrregiao.mesorregiao.UF.id)
            //estados.push( response[i].nome );
            select.options[select.options.length] = new Option(response[i].nome + " / " + response[i].municipio.microrregiao.mesorregiao.UF.sigla  , response[i].municipio.microrregiao.mesorregiao.UF.id );
            
        })

    });

    

}

function selecionaCidades(idEstado) {

    if (idEstado == '0') {

        $('.contentAvisoGenerico').css({ visibility: "visible" });
        $('#labelMsgDeErroAvisoGenerico').empty();
        $('#labelMsgDeErroAvisoGenerico').append("Selecione um Estado");

    } else {

        var resp = null;
        const select = document.querySelector('#selCidadesNovoDocumento');
        select.options[select.options.length] = new Option('Selecione uma Cidade', '0');
        //select.selectize.clear();

        var settings = {
            "url": "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + idEstado + "/distritos",
            "method": "GET",
            "timeout": 0,
        };

        $.ajax(settings).done(function (response) {

            $(response).each(function (i, e) {
                //console.log(response[0].municipio.microrregiao.mesorregiao.UF.id)
                //estados.push( response[i].nome );
                select.options[select.options.length] = new Option(response[i].nome , response[i].nome );
            
            })

        });

    }


}

/* SUCESSO */
function sucessoNovoDocumento(json) {
    let obj = json.resultado;
    alert(obj)
}

/* ERROS */
function erroNovoDocumento() {
    $('.contentAvisoGenerico').css({ visibility: "visible" });
    $('#labelMsgDeErroAvisoGenerico').empty();
    $('#labelMsgDeErroAvisoGenerico').append("[ERRO] Tente novamente");
}




