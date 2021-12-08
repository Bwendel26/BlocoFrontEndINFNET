
function calculaQuadrado(numero) {
    let resultado = document.getElementById("resultadoQuadrado");
    resultado.innerText = Math.pow(numero, 2);
}
function calculaCubo(numero) {
    let resultado = document.getElementById("resultadoCubo");
    resultado.innerText = Math.pow(numero, 3);
}
function calculaRaizQuadrada(numero) {
    let resultado = document.getElementById("resultadoRaizQuadrada");
    resultado.innerText = Math.sqrt(numero);
}
function calculaFatorial(numero) {

}
function calculaParImpar(numero) {

}
function calculaPrimo(numero) {

}

function calcula() {
    let numero = document.getElementById("numero").value;
    calculaQuadrado(numero);
    calculaCubo(numero);
    calculaRaizQuadrada(numero);
    calculaFatorial(numero);
    calculaParImpar(numero);
    calculaPrimo(numero);
}