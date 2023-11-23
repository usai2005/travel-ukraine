import {
  ukrainianLanguageReviews,
  englishLanguageReviews,
} from "../data/reviewsData.js";

// getting element from DOM
const languageBtn = document.querySelector(".js-language-btn");
const sliderLine = document.querySelector(".slider-line");
const nextButtons = document.querySelectorAll(".js-next-btn");
const prevButtons = document.querySelectorAll(".js-prev-btn");

let offset = 0;

//chose ua slides as default
onUkrainianLanguageReviews();

//adding listener to language btn and start language choosing func
languageBtn.addEventListener("click", choseReviewsLanguage);

//language choosing func
function choseReviewsLanguage(e) {
  //if events target contains class js-ua we start one or another func
  if (e.target.classList.contains("js-ua")) {
    onEnglishLanguageReviews();
  } else {
    onUkrainianLanguageReviews();
  }
}

// );

//making separated slides markups for each  ukr slide from imported data array using map method and join them to long markup row of all slides
function onUkrainianLanguageReviews() {
  const allUkrainianReviews = ukrainianLanguageReviews
    .map(
      ({ name, feedback }) => `<li class="feedback-item">
<div class="feedback-item-info">
  <h3 class="feedback-item-title">${name}</h3>
  <p class="feedback-item-text">
    ${feedback}
  </p>
</div>
</li>`
    )
    .join("");

  //cleaning prev slides content
  sliderLine.innerHTML = "";

  //adding markup we got on previous step to ul element
  return sliderLine.insertAdjacentHTML("beforeend", allUkrainianReviews);
}

//making separated slides markups for each  eng slide from imported data array using map method and join them to long markup row of all slides
function onEnglishLanguageReviews() {
  const allEnglishReviews = englishLanguageReviews
    .map(
      ({ name, feedback }) => `<li class="feedback-item">
<div class="feedback-item-info">
  <h3 class="feedback-item-title">${name}</h3>
  <p class="feedback-item-text">
    ${feedback}
  </p>
</div>
</li>`
    )
    .join("");

  //cleaning prev slides content
  sliderLine.innerHTML = "";

  //adding markup we got on previous step to ul element

  return sliderLine.insertAdjacentHTML("beforeend", allEnglishReviews);
}

//logic of moving slides
//moving to next slide
//finds nextBtn DOM element and adds click eventListener on it. If it's clicked to var offset adds 800px. If offset reaches 7200 px it becomes 0.
nextButtons.forEach((nextBtn) =>
  nextBtn.addEventListener("click", getNextSlide)
);
function getNextSlide() {
  offset += 800;
  if (offset > 7200) {
    offset = 0;
  }
  //just changing value of selector "left" in CSS and positioning slides in its thumb
  sliderLine.style.left = -offset + "px";
}

//moving to prev slide
//finds prevBtn DOM element and adds click eventListener on it. If it's clicked to var offset шы subtracted 800px. If offset reaches 0 px it becomes 7200.
prevButtons.forEach((prevBtn) =>
  prevBtn.addEventListener("click", getPrevSlide)
);

function getPrevSlide() {
  offset -= 800;
  if (offset < 0) {
    offset = 7200;
  }
  //just changing value of selector "left" in CSS and positioning slides in its thumb
  sliderLine.style.left = -offset + "px";
}
