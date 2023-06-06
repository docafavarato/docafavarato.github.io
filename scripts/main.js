
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/* async function typeSentence(sentence, eleRef, delay = 100) {
  const words = sentence.split(" ");
  let i = 0;
  while (i < words.length) {
      const currentWord = words[i];
      let j = 0;
      while (j < currentWord.length) {
          await waitForMs(delay);
          if (i === words.length - 1 && currentWord === "developer.") {
              $(eleRef).append('<span class="white-text">' + currentWord[j] + '</span>');
          } else {
              $(eleRef).append(currentWord[j]);
          }
          j++;
      }
      $(eleRef).append(" ");
      i++;
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
  while (letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
  }
}

$(document).ready(async function() {
  await typeSentence("ullStack developer.", ".fullstack");
}); */

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

var typed = new Typed(".fullstack", {
  strings: ["Backend <span class='white-text'>developer</span>", "FullStack <span class='white-text'>developer</span>"],
  typeSpeed: 100,
  backSpeed: 50,
  cursorChar: ""
});