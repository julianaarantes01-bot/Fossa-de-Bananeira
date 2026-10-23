// ===================================
// CONTADORES
// ===================================

function animarContador(id, valorFinal) {

    const elemento = document.getElementById(id);

    if (!elemento) return;

    let valor = 0;

    const intervalo = setInterval(() => {

        valor++;

        elemento.innerText = valor;

        if (valor >= valorFinal) {
            clearInterval(intervalo);
        }

    }, 150);

}

animarContador("beneficiosContador", 6);
animarContador("etapasContador", 5);
animarContador("odsContador", 4);


// ===================================
// MENU
// ===================================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (!nav) return;

    if (window.scrollY > 100) {

        nav.style.background = "#1b5e20";
        nav.style.boxShadow =
        "0 4px 20px rgba(0,0,0,.3)";

    } else {

        nav.style.background =
        "rgba(0,0,0,.75)";

        nav.style.boxShadow = "none";

    }

});


// ===================================
// ANIMAÇÃO DOS CARDS
// ===================================

const cards = document.querySelectorAll(
".card, .foto, .saiba-card"
);

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0px)";

}

});

}

);

cards.forEach(card => {

card.style.opacity = "0";

card.style.transform =
"translateY(40px)";

card.style.transition =
"all 0.8s ease";

observer.observe(card);

});


// ===================================
// FOLHAS CAINDO
// ===================================

for(let i=0;i<15;i++){

const folha =
document.createElement("div");

folha.innerHTML = "🍃";

folha.classList.add("folha");

folha.style.position = "fixed";
folha.style.top = "-50px";

folha.style.left =
Math.random()*100 + "vw";

folha.style.fontSize =
(20 + Math.random()*15) + "px";

folha.style.opacity =
Math.random()*0.7 + 0.3;

folha.style.pointerEvents = "none";

folha.style.zIndex = "1";

folha.style.animation =
`cair ${5 + Math.random()*8}s linear infinite`;

document.body.appendChild(folha);

}


// ===================================
// KEYFRAMES DAS FOLHAS
// ===================================

const style =
document.createElement("style");

style.innerHTML = `

@keyframes cair{

0%{
transform:
translateY(-50px)
rotate(0deg);
}

100%{
transform:
translateY(110vh)
rotate(360deg);
}

}

`;

document.head.appendChild(style);


// ===================================
// SAIBA MAIS
// ===================================

function abrirSaibaMais(){

const area =
document.getElementById(
"areaSaibaMais"
);

if(!area) return;

if(
area.style.display === "none" ||
area.style.display === ""
){

area.style.display = "block";

}else{

area.style.display = "none";

}

}


// ===================================
// CONSOLE
// ===================================

console.log(
"🌱 Site carregado com sucesso!"
);