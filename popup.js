document.getElementById("popup-btn-yes").addEventListener("click", myFunc());

function myFunc() {
  console.log("test");
}

const phrases = [
  "Lonely?",
  "Are you searching for love?",
  "Looking for unconditional companionship?",
  "Want more cuddles?",
  "Are you ready for commitment?"
];

let title = document.getElementById("popup-title");
let rando = Math.floor(Math.random() * 5);
title.innerHTML = phrases[rando]
