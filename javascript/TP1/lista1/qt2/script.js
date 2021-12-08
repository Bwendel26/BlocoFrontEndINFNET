/**  @todo Faça um programa que peça a temperatura em graus Fahrenheit, 
    transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9)
*/

function main() {

    let temperaturaFahrenheit = 0;
    let temperaturaCelsius = 0;

    temperaturaFahrenheit = parseFloat(prompt(`Entre com a temperatura em Fahrenheit: `));

    function calculaFahrenheitParaCelsius() {
        
        temperaturaCelsius = 5 * ((temperaturaFahrenheit - 32) / 9);

        return temperaturaCelsius;
    }

    return calculaFahrenheitParaCelsius();
}

let resultado = main();
console.log(resultado);