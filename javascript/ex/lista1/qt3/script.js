// @todo Faça um programa que peça dois números e imprima o maior deles.

function main() {

    let primeiroNumero = parseFloat(prompt(`Entre com o primeiro numero: `));
    let segundoNumero = parseFloat(prompt(`Entre com o segundo número: `));


    function verificaMaiorEntreDoisNumeros(n1, n2) {
        
        if(primeiroNumero > segundoNumero) {
            return primeiroNumero;
        }
        return segundoNumero;
    }

    return verificaMaiorEntreDoisNumeros(primeiroNumero, segundoNumero);
}

let resultado = main();
console.log(resultado);