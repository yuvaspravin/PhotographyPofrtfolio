const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds

images[0] = 'Images/bannerImageOne.avif';
images[1] = 'Images/imageBannerTwo.avif';


function changePicture(direction) {
    if (direction === 'next') {
        i = (i + 1) % images.length;
    } else if (direction === 'prev') {
        i = (i - 1 + images.length) % images.length;
    }
    
    var header = document.querySelector('.header');
    header.style.backgroundImage = "url(" + images[i] + ")";
}

document.querySelector('.prev').addEventListener('click', function() {
    changePicture('prev');
});

document.querySelector('.next').addEventListener('click', function() {
    changePicture('next');
});
window.onload = changePicture;


  let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName('swiper-slide');
  if (n >= slides.length) {
    slideIndex = 0;
  }
  
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about__container img", {
  ...scrollRevealOption,
  delay: 1500,
});








