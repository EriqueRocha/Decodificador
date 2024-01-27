// Troca vogais e consoantes
function trocarLetras(palavra) {
    var vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var consoantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';

    return palavra.replace(/[aeiouAEIOU]/g, function (match) {
        var index = vogais.indexOf(match);
        return vogais[(index + 1) % vogais.length];
    }).replace(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g, function (match) {
        var index = consoantes.indexOf(match);
        return consoantes[(index + 1) % consoantes.length];
    });
}

// Desfaz a troca
function desfazerTroca(palavra) {
    var vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var consoantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';

    return palavra.replace(/[aeiouAEIOU]/g, function (match) {
        var index = vogais.indexOf(match);
        return vogais[(index - 1 + vogais.length) % vogais.length];
    }).replace(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g, function (match) {
        var index = consoantes.indexOf(match);
        return consoantes[(index - 1 + consoantes.length) % consoantes.length];
    });
}

document.getElementById("criptografar").addEventListener("click", function () {
    var frase = document.getElementById("fraseInput").value;
    var fraseTrocada = trocarLetras(frase);
    document.getElementById("resultado").innerText = fraseTrocada;
});

document.getElementById("descriptografar").addEventListener("click", function () {
    var frase = document.getElementById("fraseInput").value;
    var resultadoDesfeito = desfazerTroca(frase);
    document.getElementById("resultado").innerText = resultadoDesfeito;
});
