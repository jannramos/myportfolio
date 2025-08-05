const textArray = ["Web Developer", "Designer", "Programmer"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1500; // Delay between texts
let textIndex = 0;
let charIndex = 0;

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

function type() {
if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
} else {
    setTimeout(erase, newTextDelay);
}
}

function erase() {
if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
} else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, typingDelay + 500);
}
}

document.addEventListener("DOMContentLoaded", function () {
if (textArray.length) setTimeout(type, newTextDelay);
});