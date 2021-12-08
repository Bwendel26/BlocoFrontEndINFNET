// @todo Faça um programa que imprima “Bom dia”, “Boa tarde” 
// ou “Boa noite” dependendo da hora do dia. Dica: use a classe Date.

function SaudacaoComBaseNaHora() {

    let horas = new Date().getHours();
    let saudacao;

    if(horas >= 6 && horas < 12) {
        saudacao = "Bom dia!";
    } else if (horas >= 12 && horas < 18) {
        saudacao = "Boa tarde!";
    } else if (horas >= 18 || horas < 6) {
        saudacao = "Boa noite!";
    }

    return saudacao;
}

let resultado = SaudacaoComBaseNaHora();
console.log(resultado);