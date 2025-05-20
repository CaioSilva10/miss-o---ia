const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Quais são os 10 primeiros números de pi?",
    alternativas: ["1592653589", "3,141592653"],
  },
  {
    enunciado: "Onde fica a mesopotâmia?",
    alternativas: ["Oriente Médio, localizada entre os rios Tigre e Eufrates, que hoje em dia corresponde principalmente ao território do Iraque", "Oriente Médio"],
  },
   {
    enunciado: "Oque mais é c=8?",
    alternativas: ["Eu sei,é a minha mãe", "É a minha mãe"],
  },
   {
    enunciado: "10+-43",
    alternativas: ["53", "33"],
  },
   {
    enunciado: "Gabriel é uma criança gay?",
    alternativas: ["sim", "claro"],
  },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta();