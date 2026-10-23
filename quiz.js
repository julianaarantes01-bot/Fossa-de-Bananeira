let pontos = 0;
let respondidas = 0;

const totalPerguntas = 10;

const bancoPerguntas = [

{
pergunta:"Qual tipo de água é tratada pela Fossa de Bananeira?",
alternativas:["Água Cinza","Água Potável","Água Mineral","Água Negra"],
correta:0
},

{
pergunta:"Qual planta é mais utilizada nesse sistema?",
alternativas:["Roseira","Bananeira","Girassol","Orquídea"],
correta:1
},

{
pergunta:"A Fossa de Bananeira utiliza energia elétrica?",
alternativas:["Sim","Não","Somente à noite","Apenas no verão"],
correta:1
},

{
pergunta:"Qual processo devolve água para a atmosfera?",
alternativas:["Combustão","Evapotranspiração","Fermentação","Oxidação"],
correta:1
},

{
pergunta:"Quem ajuda na decomposição da matéria orgânica?",
alternativas:["Microrganismos","Pássaros","Insetos","Formigas"],
correta:0
},

{
pergunta:"A Fossa de Bananeira é considerada:",
alternativas:["Máquina Industrial","Tecnologia Sustentável","Usina","Tecnologia Bélica"],
correta:1
},

{
pergunta:"O sistema ajuda a preservar:",
alternativas:["Combustíveis","Recursos Hídricos","Minérios","Gasolina"],
correta:1
},

{
pergunta:"Qual ODS está ligada ao saneamento?",
alternativas:["ODS 2","ODS 6","ODS 8","ODS 14"],
correta:1
},

{
pergunta:"A Fossa de Bananeira utiliza produtos químicos?",
alternativas:["Sempre","Não","Às vezes","Apenas no início"],
correta:1
},

{
pergunta:"O principal objetivo da Fossa de Bananeira é:",
alternativas:["Armazenar água","Produzir energia","Tratar águas cinzas","Produzir frutas"],
correta:2
},

{
pergunta:"Qual material auxilia na drenagem?",
alternativas:["Algodão","Brita","Plástico","Vidro"],
correta:1
},

{
pergunta:"As raízes das bananeiras absorvem:",
alternativas:["Água e nutrientes","Plástico","Metal","Combustível"],
correta:0
},

{
pergunta:"A tecnologia é indicada principalmente para:",
alternativas:["Áreas rurais","Aeroportos","Portos","Shoppings"],
correta:0
},

{
pergunta:"As águas cinzas vêm principalmente de:",
alternativas:["Vaso sanitário","Pias e chuveiros","Rios","Poços"],
correta:1
},

{
pergunta:"A evapotranspiração ocorre principalmente nas:",
alternativas:["Pedras","Folhas","Tubulações","Britas"],
correta:1
},

{
pergunta:"A matéria orgânica serve para:",
alternativas:["Alimentar microrganismos","Produzir gasolina","Gerar plástico","Produzir concreto"],
correta:0
},

{
pergunta:"A Fossa de Bananeira contribui para:",
alternativas:["Poluição","Sustentabilidade","Desmatamento","Desperdício"],
correta:1
},

{
pergunta:"As folhas secas ajudam na:",
alternativas:["Filtragem","Combustão","Oxidação","Soldagem"],
correta:0
},

{
pergunta:"Qual benefício ambiental ocorre?",
alternativas:["Contaminação","Preservação do solo","Desmatamento","Poluição do ar"],
correta:1
},

{
pergunta:"O sistema trabalha principalmente com processos:",
alternativas:["Naturais","Industriais","Militares","Eletrônicos"],
correta:0
},

{
pergunta:"Qual objetivo da educação ambiental?",
alternativas:["Desperdício","Conscientização","Poluição","Consumo excessivo"],
correta:1
},

{
pergunta:"A tecnologia apresenta custo:",
alternativas:["Alto","Baixo","Muito elevado","Industrial"],
correta:1
},

{
pergunta:"As bananeiras são escolhidas porque:",
alternativas:["Consomem muita água","Possuem flores grandes","Produzem madeira","São pequenas"],
correta:0
},

{
pergunta:"Qual ODS relaciona-se à vida terrestre?",
alternativas:["ODS 3","ODS 15","ODS 17","ODS 1"],
correta:1
},

{
pergunta:"A decomposição é realizada por:",
alternativas:["Microrganismos","Motores","Bombas elétricas","Máquinas"],
correta:0
},

{
pergunta:"A Fossa de Bananeira reduz:",
alternativas:["Impactos ambientais","Plantas","Árvores","Animais"],
correta:0
},

{
pergunta:"Uma vantagem do sistema é:",
alternativas:["Baixa sustentabilidade","Baixo custo","Alto desperdício","Grande poluição"],
correta:1
},

{
pergunta:"O sistema reutiliza:",
alternativas:["Água e nutrientes","Combustível","Concreto","Metais"],
correta:0
},

{
pergunta:"As ODS são metas da:",
alternativas:["ONU","NASA","UNESCO","FAO"],
correta:0
},

{
pergunta:"A Fossa de Bananeira é um exemplo de:",
alternativas:["Tecnologia Sustentável","Arma Militar","Usina Nuclear","Máquina Industrial"],
correta:0
}

];
const perguntasSorteadas =
bancoPerguntas
.sort(() => Math.random() - 0.5)
.slice(0,10);

const quiz = document.getElementById("quiz");

perguntasSorteadas.forEach((questao, indice)=>{

let html = `
<div class="pergunta">
<h3>${indice+1}. ${questao.pergunta}</h3>
`;

questao.alternativas.forEach((alt,i)=>{

html += `
<button onclick="responder(this,${i===questao.correta})">
${alt}
</button>
`;

});

html += `</div>`;

quiz.innerHTML += html;

});

function responder(botao, correta){

    const pergunta =
    botao.parentElement;

    const botoes =
    pergunta.querySelectorAll("button");

    botoes.forEach(btn => {

        btn.disabled = true;

    });

    respondidas++;

    if(correta){

        pontos++;

        botao.style.background =
        "#2e7d32";

        botao.style.color =
        "white";

        botao.innerHTML +=
        " ✅ Correta";

    }else{

        botao.style.background =
        "#c62828";

        botao.style.color =
        "white";

        botao.innerHTML +=
        " ❌ Incorreta";

        // mostra qual é a correta

        botoes.forEach(btn => {

            if(btn.dataset.correta === "true"){

                btn.style.background =
                "#2e7d32";

                btn.style.color =
                "white";

                btn.innerHTML +=
                " ✅ Correta";

            }

        });

    }

    atualizarProgresso();

    document.getElementById(
    "pontuacao"
    ).innerHTML =

    `Pontuação: ${pontos} / ${totalPerguntas}`;

    if(respondidas === totalPerguntas){

        finalizarQuiz();

    }

}

function atualizarProgresso(){

const progresso =
document.getElementById("progresso");

progresso.style.width =
(respondidas / totalPerguntas * 100) + "%";

}

function finalizarQuiz(){

const resultado =
document.getElementById("resultadoFinal");

const certificado =
document.getElementById("certificadoTexto");

if(pontos <= 4){

resultado.innerHTML =
"🌱 Aprendiz da Sustentabilidade";

certificado.innerHTML =
"Continue estudando sobre saneamento ecológico.";

}

else if(pontos <= 7){

resultado.innerHTML =
"🍌 Especialista em Fossa de Bananeira";

certificado.innerHTML =
"Você possui um bom conhecimento sobre o tema.";

}

else{

resultado.innerHTML =
"🏆 Guardião do Meio Ambiente";

certificado.innerHTML =
"Excelente desempenho!";

}

}

function reiniciarQuiz(){

location.reload();

}