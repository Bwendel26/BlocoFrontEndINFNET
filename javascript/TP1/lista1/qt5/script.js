// @todo Faça um programa que verifique se uma letra digitada é 
        //  vogal ou consoante.

function main() {

    let alfabeto = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
    let vogais = [a, e, i, o, u];

    let letraInserida = prompt(`Entre com uma letra: `);

    function verificaVogalOuConsoante(letra) {
        
        resultado = "None";

        for(let i = 0; i < alfabeto.length; i++) {
            for(let j = 0; j < vogais.length; j++) {

                if(letra == alfabeto[i]) {
                    resultado = "consoante";

                    if(letra == vogais[j]) {
                        return resultado = "vogal";
                    }
                }
            }
        }


        return resultado;
    }

    return verificaVogalOuConsoante(letraInserida);
}

let resultado = main();
console.log(resultado);