/*
Crie um componente que possua 3 caixas de texto que só aceitam números e tenha 
os rótulos (label) Quantidade de números, valor mínimo e valor máximo. 
O componente deve ainda possuir um botão calcular que quando acionado deve criar 
um array com quantidade de números aleatórios não repetidos e ordená-los. 
Os números devem estar entre valor mínimo e valor máximo (inclusives, ou 
seja incluindo o valor mínimo e valor máximo). Lembre-se que para calcular 
quantidade de números deve ser menor que a soma de valor mínimo e valor máximo.
*/

function criarArrayValoresAleatorios() {

    qtd = parseInt(document.getElementById("qtdN").value);
    max = parseInt(document.getElementById("valMax").value);
    min = parseInt(document.getElementById("valMin").value);
    let valores = [];

    for (let i = 0; i < qtd; i++) {
        let condicao = true;
        numRandom = Math.floor(Math.random() * (max - min + 1) + min);
        for (let j = 0; j < qtd; j++) {
            if(valores[j] == numRandom) {
                condicao = false;
            }
        }
        if(condicao) {
            valores.push(numRandom);
        }
    }

    return valores;
}

function ordenaValores() {

    document.getElementById("form4").addEventListener('submit', e => {
        e.preventDefault();
    });

    let arrayValores = criarArrayValoresAleatorios();
    arrayOrdenado = `<p>${arrayValores.sort()}</p>`;

    console.log(arrayOrdenado);
    return document.getElementById("resultadoQ4").innerHTML = arrayOrdenado;
}