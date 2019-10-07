var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  //var slides = PROJECTS;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function loadProjects(){
$('.project-slideshow').html(`
<div class = "mySlides fade"></div>
<img src="img/QuizAppPic2.png">
<div class = "project-text">
  <h3>Halloween Quiz App</h3>
  <h4>Technology used:</h4>
  <ul class = "tech">
    <li>HTML</li>
    <li>CSS</li>
    <li>jQuery</li>
    <li>Javascript</li>
  </ul>
  <h4>Brief description of project:</h4>
  <p>Halloween trivia quiz with 5 multiple choice questions</p>
  <a id = "github" href = "https://github.com/LZylstra/Quiz-App"><i class="fab fa-github-square"></i> GitHub</a>
  <a href = "https://lzylstra.github.io/Quiz-App/">Live Demo </a>
</div>
</div>  `);
}

