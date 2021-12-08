// @todo Faça um programa que peça as 4 notas bimestrais e mostre a média.

function main() {

    let listaNotasBimestrais = [];
    let contaQtdDeNotas = 0;

    function entradaDeDados() {
    
        for (let i = 0; i < 4; i++) {
            // alert(`Entre com a ${contaQtdDeNotas}a nota: `);
            let notaInserida = parseFloat(prompt(`Entre com a ${contaQtdDeNotas + 1}a nota: `));
            listaNotasBimestrais.push(notaInserida);
            contaQtdDeNotas += 1;
        }
    }

    function calculaMediaNotasBimestrais() {
        
        let somaNotas = 0;
        listaNotasBimestrais.forEach(e => {
            somaNotas += e
        });

        let mediaNotas = somaNotas / contaQtdDeNotas;

        return mediaNotas;
    }

    entradaDeDados();
    return calculaMediaNotasBimestrais();
}

let resultado = main();
console.log(resultado);