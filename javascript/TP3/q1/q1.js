/*
Crie um componente que tenha duas caixas de texto que só 
aceitam números e tenha os rótulos (label) valor mínimo e 
valor máximo, checando sempre se o valor mínimo é menor 
que o valor máximo. O componente deve ainda possuir um 
botão calcular que quando acionado deve contar e imprimir 
quantos números existem entre valor mínimo e valor máximo 
(exclusives*) que sejam múltiplos de 2 e 3 simultaneamente. 
Não deve ser possível calcular se faltar algum dos números.

* exclusives - Ou seja, quantos números existem entre valor 
mínimo e valor máximo, excluindo o valor mínimo e valor máximo
*/

function validaForm (){
    condicaoN1 = document.getElementById("number1").value.length < 1;
    condicaoN2 = document.getElementById("number2").value.length < 1;
    if(condicaoN1 || condicaoN2){
        alert('Por favor, preencha todos o campo Primeiro número!!!');
        document.getElementById("number").focus();
        return false
    }
}


function calculaIntervaloNumeros() { 

    n1 = parseFloat(document.getElementById("number1").value);
    n2 = parseFloat(document.getElementById("number2").value);
    
    document.getElementById("form1").addEventListener('submit', e => {
        e.preventDefault();
    });

    validaForm();
    
    contadorNumeros = 0;
    
    if(n1 < n2) {
        for(let index = n1; index < n2; index++) {
            if(index % 6 == 0) {
                contadorNumeros++;
            }
        }
    } else {
        for(let index = n2; index < n1; index++) {
            if(index % 6 == 0) {
                contadorNumeros++;
            }
        }
    }
    return document.getElementById("resultadoQ1").innerHTML = contadorNumeros;
}