//extension's code

//changes any paragraph text to red
let test = document.querySelectorAll('p');
test.forEach((text) => {
  text.style.color = 'red';
})

let colorFlow = ["#FDDDE6","#FDD5DF", "#FECDD7", "#FEC6D0", "#FFBEC8", "#FFB6C1"]
//changes background color to pink as you mouse over
const divs = document.querySelectorAll('div')
divs.forEach((div) => {
  div.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = colorFlow[0];

    setTimeout(() => {
      event.target.style.backgroundColor = colorFlow[1];
      event.target.style.backgroundColor = colorFlow[2];
      event.target.style.backgroundColor = colorFlow[3];
      event.target.style.backgroundColor = colorFlow[4];
      event.target.style.backgroundColor = colorFlow[5];
    }, 1000);

  }, false);
});
