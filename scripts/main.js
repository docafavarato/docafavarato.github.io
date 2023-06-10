const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Mobile sections touch
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


// Section changer
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

// Toast
window.addEventListener('DOMContentLoaded', function() {
  var toast = new bootstrap.Toast(document.querySelector('.toast'));
  
  var delay = Math.floor(Math.random() * (35000 - 25000 + 1)) + 25000;
  
  setTimeout(function() {
      toast.show();
  }, delay);
});

// Typed effect
var typed = new Typed(".fullstack", {
  strings: ["Backend <span class='white-text'>developer</span>", "FullStack <span class='white-text'>developer</span>"],
  typeSpeed: 100,
  backSpeed: 50,
  cursorChar: ""
});

// Image ampliation
let imgs = document.querySelectorAll('.card-img-top');
function handleClick(e) {
  let zoomImg = document.createElement('img');
  zoomImg.src = e.target.src;
  zoomImg.style.position = 'absolute';
  zoomImg.style.zIndex = '10';
  zoomImg.style.width = '1000px';
  zoomImg.style.top = '50%';
  zoomImg.style.left = '50%';
  zoomImg.style.transform = 'translate(-50%, -50%)';
  zoomImg.style.opacity = '0'; 
  zoomImg.style.transition = 'opacity 0.5s';

  document.body.appendChild(zoomImg);
  setTimeout(() => {
    zoomImg.style.opacity = '1';
  }, 10);

  setTimeout(() => {
    zoomImg.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(zoomImg);
    }, 500);
  }, 2000);
}

imgs.forEach(img => {
  img.addEventListener('click', handleClick);
});
