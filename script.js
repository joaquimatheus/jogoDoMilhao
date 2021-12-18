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

let IMPerguntas = function (lista) {
    this.lista = lista;
}

let SISTPontos = function(valor, pontosTemporarios, pontos) {
    this.valor = valor;
    this.pontosTemporarios = pontosTemporarios;
    this.pontos = pontos;
}

IMPerguntas.prototype.imprimir = function () {
    this.escolher = Math.floor(Math.random() * 3)
    let arrayEscolhido = this.lista[this.escolher]

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
            return cont = true;
        } else {
            console.log("Errou =(")
            return cont = false;
        }        
    } else if (this.escolher == 1) {
        if(resposta == 0) {
            console.log("Acertou camarada uau!!")
            return cont = true;
        } else {
            console.log("Voce esta totalmente errado e é isso")
            return cont = false;
        }
    } else {
        if(resposta == 3)  {
            console.log("Acertou QI mais de 8000")
            return cont = true;
        } else {
            console.log("Sinceramente não sei como você errou isso.")
            return cont = false;
        }
    } 
}

IMPerguntas.prototype.jogar = function () {
    this.imprimir()
    this.acertar()
}

SISTPontos.prototype.gerarPontos = function() {
    this.valor = Math.floor(Math.random() * 1000)
}

SISTPontos.prototype.addPontosTemp = function(pontos) {
    this.pontosTemporarios += pontos;
}

SISTPontos.prototype.addPontos = function() {
    this.pontos += this.pontosTemporarios;
    console.log(this.pontos);
}

SISTPontos.prototype.rodar = function() {
    this.gerarPontos()
    this.addPontosTemp(this.valor)
    this.addPontos()
}

SISTPontos.prototype.zerarPontos = function() {
    this.pontosTemporarios = 0;
    this.pontos = 0;
}

let jogoDoMilhao = new IMPerguntas([perguntas0, perguntas1, perguntas2])
jogoDoMilhao.jogar(jogoDoMilhao)

let sistemaPontos = new SISTPontos(null, 0, 0);

while (cont) {
    console.log("");
    jogoDoMilhao.jogar();

    if(cont == false) {
        sistemaPontos.zerarPontos();
        console.log("Você perdeu todos os pontos!")
    } else {
        sistemaPontos.rodar();
    }
}

