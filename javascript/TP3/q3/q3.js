/*
Crie um componente que possua um botão criar relatório que quando acionado deve imprimir um 
relatório de resultados da disciplina javascript para 20 alunos, no formato de tabela.

    As notas deverão ser números inteiros entre 0 e 100, criadas aleatoriamente;
    Cada aluno deve ser representado por um registro composto por nr e nota
        Use uma função construtora chamada Aluno reveja conceitos aqui ou aqui, se quiser 
        ousar um pouco veja classes;
        Armazena a nota do aluno como uma variável privada do tipo symbol, use getters e 
        setters para recuperar a informação.
        
    Os registros devem ser armazenados em um array;
    A impressão do relatório deve ter:
        um título;
        os resultados mostrados linha a linha no formato "Aluno nr xx - Nota yy [(A/RE)PROVADO]"; e
        um rodapé com estatística final no formato "APROVADOS: XX (xx%)  |  REPROVADOS: YY (yy%)"
*/

class Aluno {

    #nr;
    #nota;

    constructor(paramNr, paramNota) {
        this.#nr = paramNr;
        this.#nota = paramNota;
    }

    get nr() {
        return this.#nr;
    }

    set nr(paramNr) {
        this.#nr = paramNr;
    }

    get nota() {
        return this.#nota;
    }

    set nota(paramNota) {
        this.#nota = paramNota;
    }
}

function geraNotas(qtd) {
    
    let notas = [];
    for (let i = 0; i < 20; i++) {
        notas.push(Math.floor(Math.random() * 101));
    }

    return notas;
}

function criaAlunos() {

    geraNotas(20);

    let nrs = [];
    let alunos = [];
    for (let i = 0; i < 20; i++) {
        nrs.push(i+1);
    }

    for (let i = 0; i < 20; i++) {
        alunos.push(new Aluno(nrs[i], nota[i]));
    }

    return alunos;
}

function geraRelatorioAlunos() {
    
    let tabela = document.createElement("table");

    for (let i = 0; i < 20; i++) {
        let item = document.createElement("");
    }

    return document.getElementById("resultadoQ3").appendChild(tabela);
} // Finalizar isso!!!

console.log()