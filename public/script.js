var cont = 1;
document.getElementById('radio1').checked = true;

setInterval(() => {
    proximaImg();
}, 10000);

function proximaImg() {
    cont++;
    if (cont > 5) {
        cont = 1;
    }
    document.getElementById('radio' + cont).checked = true;
}

// atualiza o contador se você clicar nas bolinhas manualmente!!
document.querySelectorAll('input[name="botao__radio"]').forEach((elem, index) => {
    elem.addEventListener("change", function() {
        cont = index + 1;
    });
});

//LEMBRETE: estudar dps para conseguir compreender melhor o código

