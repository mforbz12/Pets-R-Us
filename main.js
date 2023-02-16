//extension's code
let colorFlow = ["#fff1f5","#FDDDE6","#FDD5DF", "#FECDD7", "#FEC6D0", "#FFBEC8", "#FFB6C1"]
//changes background color to pink
const divs = document.querySelectorAll('div')

divs.forEach((div) => {
  setTimeout(() => {
      div.style.backgroundColor = colorFlow[0];
    }, 6000);
  setTimeout(() => {
    div.style.backgroundColor = colorFlow[1];
  }, 6100);
  setTimeout(() => {
    div.style.backgroundColor = colorFlow[2];
  }, 6200);
  setTimeout(() => {
    div.style.backgroundColor = colorFlow[3];
  }, 6300);
  setTimeout(() => {
    div.style.backgroundColor = colorFlow[4];
  }, 6400);
  setTimeout(() => {
    div.style.backgroundColor = colorFlow[5];
  }, 6500);
  setTimeout(() => {
    div.style.backgroundColor = colorFlow[6];
  }, 6600);

  }, false);
