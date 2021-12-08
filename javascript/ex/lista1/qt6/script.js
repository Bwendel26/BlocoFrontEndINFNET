// @todo Faça um programa para a leitura de duas notas 
        // parciais de um aluno. O programa deve calcular 
        // a média alcançada por aluno e apresentar:

// a) A mensagem “Aprovado”, se a média alcançada for maior ou igual a sete.
// b) A mensagem “Reprovado”, se a média for menor do que sete.
// c) A mensagem “Aprovado com distinção”, se a média for igual a dez.

function main() {

    let listaNotasBimestrais = [];
    let contaQtdDeNotas = 0;

    function entradaDeDados() {
    
        for (let i = 0; i < 2; i++) {
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

    function verificaMediaNotasBimestrais() {
        let media = calculaMediaNotasBimestrais();
        let conceito = "Reprovado";

        if(media >= 7) {
            conceito = "Aprovado";
            if (media == 10) {
                conceito += " com distinção";
            }
        }

        return conceito;
    }

    entradaDeDados();
    calculaMediaNotasBimestrais();
    return verificaMediaNotasBimestrais();
}

let resultado = main();
console.log(resultado);