const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você aceitou seu primeiro emprego porque",
        alternativas: [
            {
                texto: "Precisava ajudar financeiramente em casa.",
                afirmacao: "Você entrou cedo no mercado de trabalho, mas não preparado."
            },
            {
                texto: "Queria iniciar sua jornada profissional com foco no futuro.",
                afirmacao: "Demorou para entrar no mercado de trabalho, mas entrou com um bom salário."
            }
        ]
    },
    {
        enunciado: "No ambiente de trabalho, você decidiu",
        alternativas: [
            {
                texto: "Cumprir suas tarefas básicas, sem se envolver muito.",
                afirmacao: "Você fez o básico, levando uma vida monótona."
            },
            {
                texto: "Se dedicar ao máximo e aprender tudo o que pudesse.",
                afirmacao: "Você teve grande destaque, o que chamou a atenção de seu chefe."
            }
        ]
    },
    {
        enunciado: "Diante de erros ou críticas, você:",
        alternativas: [
            {
                texto: "Preferiu se afastar e evitar problemas.",
                afirmacao: "Você não soube lidar bem com críticas, o que atrasou seu desenvolvimento."
            },
            {
                texto: "Encarou como parte do processo de crescimento.",
                afirmacao: "Você amadureceu e se fortaleceu com as críticas, crescendo pessoal e profissionalmente."
            }
        ]
    },
    {
        enunciado: "Após começar a trabalhar, você:",
        alternativas: [
            {
                texto: "Deixou os estudos em segundo plano.",
                afirmacao: "Com o tempo, sentiu falta de qualificação e percebeu as limitações dessa escolha."
            },
            {
                texto: "Buscou equilibrar o trabalho com a continuidade dos estudos.",
                afirmacao: "Conseguiu conciliar rotina intensa, garantindo melhores oportunidades no futuro."
            }
        ]
    },
    {
        enunciado: "Quando surgiu uma nova oportunidade em outra empresa, você:",
        alternativas: [
            {
                texto: "Recusou, com medo de sair da zona de conforto.",
                afirmacao: "Você se manteve na estabilidade, mas deixou de explorar novas possibilidades."
            },
            {
                texto: "Aceitou o desafio e buscou crescimento profissional.",
                afirmacao: "Você expandiu seus horizontes e conquistou novas experiências."
            }
        ]
    },
    {
        enunciado: "Pensando no futuro, você deseja:",
        alternativas: [
            {
                texto: "Permanecer onde está, buscando estabilidade.",
                afirmacao: "Sua prioridade foi a segurança, mantendo uma vida previsível e tranquila."
            },
            {
                texto: "Evoluir constantemente e alcançar cargos mais altos.",
                afirmacao: "Sua ambição abriu portas, levando você a alcançar grandes conquistas."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
