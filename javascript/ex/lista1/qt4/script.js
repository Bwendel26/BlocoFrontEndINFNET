// @todo Faça um programa que peça um valor e mostre na tela 
        // se o valor é positivo ou negativo.

function main() {

    let valorInserido = parseFloat(prompt(`Entre com um número: `));

    function valorPositivoOuNegativo(valor) {
        
        if(valor < 0) {
            return "negativo";
        }
        
        return "positivo";
    }

    return valorPositivoOuNegativo(valorInserido);
}

let resultado = main();
console.log(resultado);