
function scrollToAbout() {
    window.scrollTo(0, 500);
}

function scrollToProjects() {
    window.scrollTo(0, 900);
}

async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
}
  
function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
}


$(document).ready(async function() {
    await typeSentence("ullStack developer.", ".fullstack");
});

function translatePt() {
    document.getElementById("home").innerText = "Início";
    document.getElementById("about").innerText = "Sobre";
    document.getElementById("projects").innerText = "Projetos";
    document.getElementById("helloWorld").innerText = "Olá mundo,";
    document.getElementById("iAmA").innerText = "Eu sou um";
    document.getElementById("fullstack").innerText = "desenvolvedor FullStack";
    document.getElementById("portfolio").innerText = "bem vindo ao meu portfólio";
    document.getElementById("aboutBig").innerText = "Sobre mim";
    document.getElementById("moreAboutMe").innerText = "Mais sobre mim";
    document.getElementById("aboutText").innerText = "Meu nome é João Pedro, e eu sou um desenvolvedor fullstack que procura sempre aprender mais. Eu começei a programar com 15 anos, e minha primeira linguagem foi python. Eu possuo experiência no desenvolvimento web e desktop, web scraping e ciência de dados.";
    document.getElementById("projectsBig").innerText = "Projetos";
    document.getElementById("projectsText").innerText = "Esses são alguns projetos que fiz. Todos eles e mais outros estão no meu github.";
    document.getElementById("gptClone").innerText = "Um website de inteligência artificial no estilo ChatGPT feito com Flask e a API da OpenAI.";
    document.getElementById("movieDb").innerText = "Um catálogo de filmes feito com Flask e a API do The Movie DataBase.";
    document.getElementById("fileManager").innerText = "Um simples (porém funcional) gerenciador de arquivos feito com Python e PyQt5.";
    document.getElementById("cashier").innerText = "Um ponto de venda de supermercado com diversas funções feito com Python e PyQt5.";
    document.getElementById("youtubeConverter").innerText = "Um conversor de vídeos do YouTube (mp3/mp4) feito com Python, PyQt5 e PyTube.";
    document.getElementById("flappyBird").innerText = "Remake do famoso Flappy Bird, feito em C++ com a biblioteca SFML.";
    document.getElementById("keyboardSmasher").innerText = "Um jogo no estilo arcade feito em C++ com a biblioteca SFML. Esmague esse teclado!";
    document.getElementById("csgoStats").innerText = "Um tracker para o Counter-Strike: Global Offensive feito com Flask e a API do tracker.gg.";
    const links = document.getElementsByClassName("a-round");
    for (const link of links) {
        link.innerText = "Visitar";
    } 
}

function translateEn() {
    location.reload();
}