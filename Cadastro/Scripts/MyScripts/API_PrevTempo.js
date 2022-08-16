function execAPI() {
    requisicaoAssincrona('POST', '../Home/API_PrevTempo', "", sucessoAPI_PrevTempo, erroAPI_PrevTempo);
}

function sucessoAPI_PrevTempo(json) {
    let obj = json.resultado;
    geraTabela(obj);
}

function geraTabela(obj) {

    //var origem = null;
    
    //$(obj).find('cidade').each(function () {
    //    origem = $(this).find('uf').text();
    //});
    //alert(origem)
    //$('#nomeCidadeAPIPrevTempo').empty();
    //$('#nomeCidadeAPIPrevTempo').append(origem );
    
        var visoTempo = null;
        ///*** CRIA TABELA
        $('#tabelaClima').empty();
        var tbl ="<table class='table datatable-js-previsao-do-tempo'>"+
        "                <tr>                                        " +
        "                    <th>Data</th>                           " +
        "                    <th>Tempo</th>                          " +
        "                    <th>Máxima</th>                         " +
        "                    <th>Minima</th>                         " +
        "                    <th>IUA</th>                            " +
        "                </tr>";

    $(obj).find('previsao').each(function () {

        var tempo = $(this).find('tempo').text();
        if(tempo == "ec"){avisoTempo = "Encoberto com Chuvas Isoladas";}
        if(tempo == "ci"){visoTempo = "Chuvas Isoladas"; }
        if(tempo == "c"){avisoTempo = "Chuva";}
        if(tempo == "in"){avisoTempo = "Instável";}
        if(tempo == "pp"){visoTempo = "Poss.de Pancadas de Chuva";}
        if(tempo == "cm"){visoTempo = "Chuva pela Manhã";}
        if(tempo == "cn"){visoTempo = "Chuva a Noite";}
        if(tempo == "pt"){visoTempo = "Pancadas de Chuva a Tarde";}
        if(tempo == "pm"){visoTempo = "Pancadas de Chuva pela Manhã";}
        if(tempo == "np"){visoTempo = "Nublado e Pancadas de Chuva";}
        if(tempo == "pc"){visoTempo = "Pancadas de Chuva";}
        if(tempo == "pn"){visoTempo = "Parcialmente Nublado";}
        if(tempo == "cv"){visoTempo = "Chuvisco";}
        if(tempo == "ch"){visoTempo = "Chuvoso";}
        if(tempo == "t"){avisoTempo = "Tempestade";}
        if(tempo == "ps"){visoTempo = "Predomínio de Sol";}
        if(tempo == "e"){avisoTempo = "Encoberto";}
        if(tempo == "n"){avisoTempo = "Nublado";}
        if(tempo == "cl"){visoTempo = "Céu Claro";}
        if(tempo == "nv"){visoTempo = "Nevoeiro";}
        if(tempo == "g"){avisoTempo = "Geada";}
        if(tempo == "ne"){visoTempo = "Neve";}
        if(tempo == "nd"){visoTempo = "Não Definido";}
        if(tempo == "pnt"){avisoTempo = "Pancadas de Chuva a Noite";}
        if(tempo == "psc"){avisoTempo = "Possibilidade de Chuva";}
        if(tempo == "pcm"){avisoTempo = "Possibilidade de Chuva pela Manhã";}
        if(tempo == "pct"){avisoTempo = "Possibilidade de Chuva a Tarde";}
        if(tempo == "pcn"){avisoTempo = "Possibilidade de Chuva a Noite";}
        if(tempo == "npt"){avisoTempo = "Nublado com Pancadas a Tarde";}
        if(tempo == "npn"){avisoTempo = "Nublado com Pancadas a Noite";}
        if(tempo == "ncn"){avisoTempo = "Nublado com Poss.de Chuva a Noite";}
        if(tempo == "nct"){avisoTempo = "Nublado com Poss.de Chuva a Tarde";}
        if(tempo == "ncm"){avisoTempo = "Nubl.c / Poss.de Chuva pela Manhã";}
        if(tempo == "npm"){avisoTempo = "Nublado com Pancadas pela Manhã";}
        if(tempo == "npp"){avisoTempo = "Nublado com Possibilidade de Chuva";}
        if(tempo == "vn"){visoTempo = "Variação de Nebulosidade";}
        if(tempo == "ct"){visoTempo = "Chuva a Tarde";}
        if(tempo == "ppn"){avisoTempo = "Poss.de Panc.de Chuva a Noite";}
        if(tempo == "ppt"){avisoTempo = "Poss.de Panc.de Chuva a Tarde";}
        if(tempo == "ppm"){avisoTempo = "Poss.de Panc.de Chuva pela Manhã"; }

            tbl += "<tr>" +
                "<th>" + $(this).find('dia').text() +    "</th>" +
                "<th>" + visoTempo +  "</th>" +
                "<th>" + $(this).find('maxima').text() + "</th>" +
                "<th>" + $(this).find('minima').text() + "</th>" +
                "<th>" + $(this).find('iuv').text() +    "</th>" +
                "</tr>";
        });
        tbl += "</table>";

        $('#tabelaClima').append(tbl);

}

function erroAPI_PrevTempo() {
    $('.contentAvisoGenerico').css({ visibility: "visible" });
    $('#labelMsgDeErroAvisoGenerico').empty();
    $('#labelMsgDeErroAvisoGenerico').append("[ERRO] Tente novamente");
}