/***
 * Projeto: Show do Milhão
 *
 * Easy mode: Utilizar prototype no projeto
 * Hard: Implementar um sistema de pontos para o 
 *  Usuario e ao terminar uma pergunta,
 *  executar automaticamente outra pergunta.
 *  IMPORTANTE: Se o usuário quiser sair do jogo,
 *      ele precisa digitar 'SAIR' no prompt
 */

// Resposta certa = Atlântico=1
// Qual o oceano que banha o Brasil?
perguntas0 = [
    "Ártico", "Atlântico", "Índico", "Pacífico"
]

// quantos anos para se formar um seculo = res0
perguntas1 = [
    "100", "0", "1000", "10000"
]

// qual a fruta que se faz o vinho?
perguntas2 = [
    "Tomate", "Ameixa", "Pepino", "Uva" 
]

let IMPerguntas = function (id, lista) {
    this.id = id;
    this.lista = lista;
}

IMPerguntas.prototype.imprimir = function () {
    this.escolher = Math.floor(Math.random() * 3)
    let arrayEscolhido = this.lista[this.escolher]
    console.log(this.escolher)

    if (this.escolher == 0) {
        console.log("Qual o oceano que banha o Brasil?")
    } else if (this.escolher == 1) {
        console.log("Quantos anos para se formar um seculo")
    } else {
        console.log("Qual a fruta que se faz o vinho?")
    }

    for (let i = 0; i <= this.lista.length; i++) {
        console.log(i + " - " + arrayEscolhido[i])
    }
}

IMPerguntas.prototype.acertar = function () {
    let resposta = prompt("Qual é a resposta certa?");
    if (this.escolher == 0) {
        if(resposta == 1) {
            console.log("Acertou camarada!!")
        } else {
            console.log("Errou =(")
        }        
    } else if (this.escolher == 1) {
        if(resposta == 0) {
            console.log("Acertou camarada uau!!")
        } else {
            console.log("Voce esta totalmente errado e é isso")
        }
    } else {
        if(resposta == 3)  {
            console.log("Acertou QI mais de 8000")
        } else {
            console.log("Sinceramente não sei como você errou isso.")
        }
    } 
}

IMPerguntas.prototype.calculadoDePontos = function() {

}

let jogoDoMilhao = new IMPerguntas(1, [perguntas0, perguntas1, perguntas2])
jogoDoMilhao.imprimir()
jogoDoMilhao.acertar()
