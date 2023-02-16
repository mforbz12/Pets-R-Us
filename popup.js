// document.getElementById("popup-btn-yes").addEventListener("click", myFunc());

// function myFunc() {
//   console.log("test");
// }

const phrases = [
  "Lonely?",
  "Are you searching for love?",
  "Looking for unconditional companionship?",
  "Want more cuddles?",
  "Are you ready for commitment?"
];

const images = [
  "https://static.vecteezy.com/system/resources/thumbnails/002/098/204/small/silver-tabby-cat-sitting-on-green-background-free-photo.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7guuPvCzzY_-yd4QWfb2mR47UTo0LBXqfHXwNwYhPAjyHOghW3Zipem23JtStaK-zC4&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT03Vga_vzTS5D7lxxxiDbpEe080T-veAOLag2M2h8U2fRmmjmbd3ISuk5V-sCo7Ik59xg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQavWTy8aP61tCZ-NiJPQq8x4qNSuIu561vnmlNvnIdNpdwwur_MWQfyetRYJ2IDEg28&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1IGJoP2dVR0xRqjNdhzwApKcYYAWTos6Xg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrK6bgJuRwMqffreV0u9oOGqdV8Pru-j2spQ&usqp=CAU"
]

let title = document.getElementById("popup-title");
let rando = Math.floor(Math.random() * 5);
title.innerHTML = phrases[rando]

let insert = document.getElementById('insert-img');
insert.src = images[Math.floor(Math.random() * 6)]
