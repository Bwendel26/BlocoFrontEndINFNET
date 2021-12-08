// @todo Faça um programa que peça os 3 lados de um triângulo. 
    // O programa deverá informar se os valores podem ser um triângulo. 
    // Indique, caso os lados formem um triângulo, se o mesmo é: 
    // “Equilátero”, “Isósceles” ou “Escaleno”. Dicas:

// I – Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro.
// II – Triângulo Equilaátero: Três lados iguais.
// III – Triângulo Isósceles: Quaisquer dois laods iguais.
// IV – Triângulo Escaleno: Três lados diferentes.

function main() {

    let ladosTriangulo = [];
    let contaLados = 0;

    function entradaDeDados() {
    
        for (let i = 0; i < 3; i++) {
            let ladoInserido = parseFloat(prompt(`Entre com o ${contaLados + 1}° lado: `));
            ladosTriangulo.push(ladoInserido);
            contaLados += 1;
        }
    }

    function verificaTrianguloValido() {
        let valido = false;

        if (x + y > z && x + z > y && y + z > x) {
            valido = true;
        }

        return valido;
    }

    function verificaTipoTriangulo(validade) {
        if(validade) {
            if(x == y && y == z) {
                return "Triângulo Equilátero";
            } else if((x == y && y != z) || (x == z && z != y) || (z == y && y != x)) {
                return "Triângulo Isósceles";
            } else if(x != y && y != z && z != x) {
                return "Triângulo Escaleno";
            }
        }

        return "Inválido"
    }

    entradaDeDados();
    let x = ladosTriangulo[0];
    let y = ladosTriangulo[1];
    let z = ladosTriangulo[2];
    return verificaTipoTriangulo(verificaTrianguloValido);
}

let resultado = main();
console.log(resultado);