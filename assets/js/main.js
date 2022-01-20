"use strict"

// --------------
// Slider
// --------------
let slideIndex = [1, 1];
let slideID = ["slide1", "slide2"];
let dotsID = ["slider-dot1", "slider-dot2"];
showSlides(1, 0);
showSlides(1, 1);

// Next/previous controls
function plusSlide(n, no) {
  showSlides(slideIndex[no] += n, no);
}

// Thumbnail image controls
function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  let i;
  let slides = document.getElementsByClassName(slideID[no]);
  let dots = document.getElementsByClassName(dotsID[no]);
  if (n > slides.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[no]-1].style.display = "block";
  dots[slideIndex[no]-1].className += " active";
}