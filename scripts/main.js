
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

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

let touchstartX = 0;
let touchendX = 0;

function handleTouch() {
  const threshold = 100;

  const currentLink = document.querySelector('.navbar-nav a.current');
  const currentIndex = Array.from(navLinks).indexOf(currentLink);

  if (touchendX < touchstartX - threshold) {

    if (currentIndex < navLinks.length - 1) {
      currentLink.classList.remove('current');
      const nextLink = navLinks[currentIndex + 1];
      nextLink.classList.add('current');
  
      const target = nextLink.getAttribute('href');
      sections.forEach(section => {
        section.classList.remove('active');
      });
      document.querySelector(target).classList.add('active');
    }
    
  } else if (touchendX > touchstartX + threshold) {
    if (currentIndex > 0) {
      currentLink.classList.remove('current');
      const prevLink = navLinks[currentIndex - 1];
      prevLink.classList.add('current');

      const target = prevLink.getAttribute('href');
      sections.forEach(section => {
        section.classList.remove('active');
      });
      document.querySelector(target).classList.add('active');
    }
  }

  if (currentIndex === 0 && touchendX < touchstartX) {
    touchendX = touchstartX;
  }
}

document.addEventListener('touchstart', function(event) {
  touchstartX = event.touches[0].clientX;
});

document.addEventListener('touchend', function(event) {
  touchendX = event.changedTouches[0].clientX;
  handleTouch();
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
const moreButton = document.querySelector('#moreAboutMe')
const projectsButton = document.querySelector('#seeProjects');
const certButton = document.querySelector('#seeCerts');
const homeButton = document.querySelector('#backToHome');


function changeSection(e) {
  e.preventDefault();

  const clickedLink = e.target;
  navLinks.forEach(link => {
    link.classList.remove('current');
  });

  clickedLink.classList.add('current');

  sections.forEach(section => {
    section.classList.remove('active');
  });

  const target = clickedLink.getAttribute('href');
  document.querySelector(target).classList.add('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', changeSection);
});

navLinks.forEach(link => {
  link.addEventListener('click', changeSection)
});

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    link.classList.add('current');
    console.log(link.classList);
  });
});

moreButton.addEventListener('click', changeSection);
moreButton.addEventListener('click', function(e) {
  document.querySelector('#about').classList.add('current');
})
projectsButton.addEventListener('click', changeSection);
projectsButton.addEventListener('click', function(e) {
  document.querySelector('#projects').classList.add('current');
})
certButton.addEventListener('click', changeSection);
certButton.addEventListener('click', function(e) {
  document.querySelector('#certifications').classList.add('current');
})
homeButton.addEventListener('click', changeSection);
homeButton.addEventListener('click', function(e) {
  document.querySelector('#home').classList.add('current');
})


window.addEventListener('DOMContentLoaded', function() {
  var toast = new bootstrap.Toast(document.querySelector('.toast'));
  
  var delay = Math.floor(Math.random() * (35000 - 25000 + 1)) + 25000;
  
  setTimeout(function() {
      toast.show();
  }, delay);
});
