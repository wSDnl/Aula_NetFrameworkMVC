function requisicaoAssincrona( tipo , caminho , dados , funcaoJsSucesso , funcaoJsErro ) {

    $.ajax({
        type: tipo,
        url: caminho,
        async: true,
        data: JSON.stringify(dados),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (Json) {
            funcaoJsSucesso(Json);
        },
        error: function (Json) {
            funcaoJsErro(Json);
        }
    });

}