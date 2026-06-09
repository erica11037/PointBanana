/*var cont = 1;
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
*/
//LEMBRETE: estudar dps para conseguir compreender melhor o código

// ===== CONTROLAR SCROLL DO CARROSSEL SEM FAZER JUMP NA PÁGINA =====
// Quando clica na seta, o carrossel desliza mas a página fica no mesmo lugar

document.querySelectorAll('.carrossel-seta').forEach(seta => {
    seta.addEventListener('click', function(event) {
        event.preventDefault(); // Cancela o comportamento padrão do link
        
        // Pega o ID do elemento que quer ir (ex: "slide-populares-1")
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            // Faz o scroll suave apenas do carrossel, não da página
            targetElement.scrollIntoView({ 
                behavior: 'smooth',    // Desliza suavemente
                block: 'nearest',      // Não mexe na posição vertical
                inline: 'start'        // Alinha no começo do carrossel
            });
        }
    });
});

