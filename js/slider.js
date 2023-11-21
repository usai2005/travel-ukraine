import feedbacks from "../data/feedbackData.js";

// getting element from DOM
const sliderLine = document.querySelector(".slider-line");

let offset = 0;

//making separated slides markups for each slide from imported data array using map method and join them to long markup row of all slides
const allReviews = feedbacks
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

//adding markup we got on previous step to ul element
sliderLine.insertAdjacentHTML("beforeend", allReviews);

//logic of moving slides
//moving to next slide
//finds nextBtn DOM element and adds click eventListener on it. If it's clicked to var offset adds 800px. If offset reaches 7200 px it becomes 0.
document.querySelector(".js-next-btn").addEventListener("click", function () {
  offset += 800;
  if (offset > 7200) {
    offset = 0;
  }
  //just changing value of selector "left" in CSS and positioning slides in its thumb
  sliderLine.style.left = -offset + "px";
});

//moving to prev slide
//finds prevBtn DOM element and adds click eventListener on it. If it's clicked to var offset шы subtracted 800px. If offset reaches 0 px it becomes 7200.
document.querySelector(".js-prev-btn").addEventListener("click", function () {
  offset -= 800;
  if (offset < 0) {
    offset = 7200;
  }
  //just changing value of selector "left" in CSS and positioning slides in its thumb
  sliderLine.style.left = -offset + "px";
});
