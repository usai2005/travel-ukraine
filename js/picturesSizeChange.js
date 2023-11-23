const picturesEl = document.querySelectorAll(".img-thumb");

picturesEl.forEach((pictureEl) =>
  pictureEl.addEventListener("mouseover", resizeUp)
);

function resizeUp(e) {
  e.currentTarget.style.transform = "scale(1.1)";
}

picturesEl.forEach((pictureEl) =>
  pictureEl.addEventListener("mouseout", resizeDown)
);

function resizeDown(e) {
  e.currentTarget.style.transform = "scale(1)";
}
