"use strict";
const container = document.querySelector(".container");
const counter = document.querySelector(".loadCounter");
const panels = document.querySelectorAll(".panel");
const progress = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");
const enables = document.querySelectorAll("enable");
let currentEnable = 1;
let progressWidth = 30;
//defining variables for blurring loading the whole page
let loadCounter = 0;
let loadingInterval = setInterval(blurring, 30);
function blurring() {
  loadCounter++;
  if (loadCounter > 99) {
    clearInterval(loadingInterval);
  }
  counter.innerText = `${loadCounter}%`;
  counter.style.opacity = mappingBetweenNumbers(loadCounter, 0, 100, 1, 0);
  container.style.filter = `blur(${mappingBetweenNumbers(
    loadCounter,
    0,
    100,
    30,
    0
  )}px)`;
}
const mappingBetweenNumbers = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
panels.forEach((panel, index) => {
  panel.addEventListener("click", () => {
    deleteActive();
    panel.classList.add("active");
    currentEnable = index;
    console.log(`Panel acitve${currentEnable}`);
    circleUpdate();
  });
});
const deleteActive = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
const circleUpdate = () => {
  circles.forEach((circle, index) => {
    if (currentEnable === index) {
      circle.classList.add("enable");
      progressWidth += 30;
      progress.style.width += progressWidth + "%";
      console.log(`progress width:  ${progress.style.width}`);
    } else {
      circle.classList.remove("enable");
    }
  });
};
