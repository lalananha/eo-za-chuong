"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const coáaaButton = document.querySelector(".btn--coáaa");
const khumButton = document.querySelector(".btn--khum");
const gif = document.querySelector(".gif");

const MAX_IMAGES = 8;

let play = true;
let noCount = 0;

coáaaButton.addEventListener("click", handlecoáaaClick);

khumButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    resizecoáaaButton();
    updatekhumButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handlecoáaaClick() {
  titleElement.innerHTML = "phải z chớ há há";
  buttonsContainer.classList.add("hidden");
  changeImage("coáaa");
}

function resizecoáaaButton() {
  const computedStyle = window.getComputedStyle(coáaaButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  coáaaButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "khum",
    "anh yêu chắc khum",
    "khum địt thúi thiệt hả",
    "hoi địt thúi i mà",
    "za chưởng phải địt thúi chớ",
    "năn nỉ đó địt thúi i",
    "địt thúi i em choa 10 nụ hun",
    "hôgg chịu địt thúi hả",
    "bấm coá đi anh yêu làm gì coá cửa"

  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
    gif.src =
    "https://www.icegif.com/wp-content/uploads/2023/05/icegif-190.gif";
}

function updatekhumButtonText() {
  khumButton.innerHTML = generateMessage(noCount);
}