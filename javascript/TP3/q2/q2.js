/*Crie um componente que tenha uma caixa de texto que só aceita números e tenha o rótulo
(label) Calcular o fatorial de. O componente deve ainda possuir um botão calcular que 
quando acionado deve calcular o fatorial do número digitado, imprimido o resultado e 
o tempo necessário para a execução. (Dica: usar o objeto javascript Date)

    O resultado deve ser mostrado no formato 53! = XXXXXX (yyy milisegundos);
    O código deve calcular o fatorial e não apenas imprimir uma string com a resposta.
*/

function calculaFatorial() {

    const inicio = new Date().getMilliseconds();

    entrada = parseFloat(document.getElementById("fatorial").value);
    
    document.getElementById("form2").addEventListener('submit', e => {
        e.preventDefault();
    });

    fatorial = 1;
    for (let index = entrada; index > 1; index--) {
        fatorial *= index;
    }

    const total = new Date().getMilliseconds() - inicio;
    resultado = `${entrada}! = ${fatorial} (${total} milisegundos);`;
    return document.getElementById("resultadoQ2").innerHTML = resultado;
}