function openModal(modal) {
    console.log(modal)
  document.getElementById(modal).style.display = "flex";
}

function closeModal(modal) {
    console.log(modal)

  document.getElementById(modal).style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n, modelSlides) {
  showSlides((slideIndex += n), modelSlides);
}

function currentSlide(n, modelSlides) {
  showSlides((slideIndex = n), modelSlides);
}

function showSlides(n, modelSlides) {
  var i;
  var slides = document.getElementsByClassName(modelSlides);
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
