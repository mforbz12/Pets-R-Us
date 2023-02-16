//extension's code

//changes any paragraph text to red
let test = document.querySelectorAll('p');
test.forEach((text) => {
  text.style.color = 'red';
})


let colorFlow = ["#fff1f5","#FDDDE6","#FDD5DF", "#FECDD7", "#FEC6D0", "#FFBEC8", "#FFB6C1"]
//changes background color to pink as you mouse over
const divs = document.querySelectorAll('div')

divs.forEach((div) => {
  setTimeout(() => {
      div.style.backgroundColor = colorFlow[0];
    }, 6000);
  setTimeout(() => {
    div.style.backgroundColor = colorFlow[1];
  }, 7000);
  setTimeout(() => {
    div.style.backgroundColor = colorFlow[2];
  }, 8000);
  setTimeout(() => {
    div.style.backgroundColor = colorFlow[3];
  }, 9000);
  setTimeout(() => {
    div.style.backgroundColor = colorFlow[4];
  }, 10000);
  setTimeout(() => {
    div.style.backgroundColor = colorFlow[5];
  }, 11000);
  setTimeout(() => {
    div.style.backgroundColor = colorFlow[6];
  }, 12000);

  }, false);
