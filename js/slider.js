import feedbacks from "../data/feedbackData.js";

const sliderLine = document.querySelector(".slider-line");

let offset = 0;

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

sliderLine.insertAdjacentHTML("beforeend", allReviews);

document.querySelector(".js-next-btn").addEventListener("click", function () {
  offset += 800;
  if (offset > 7200) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});

document.querySelector(".js-prev-btn").addEventListener("click", function () {
  offset -= 800;
  if (offset < 0) {
    offset = 7200;
  }
  sliderLine.style.left = -offset + "px";
});
