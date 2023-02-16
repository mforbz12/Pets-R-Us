//extension's code

//changes any paragraph text to red
let test = document.querySelectorAll('p');
test.forEach((text) => {
  text.style.color = 'red';
})


//changes background color to pink as you mouse over
const divs = document.querySelectorAll('div')
divs.forEach((div) => {
  div.addEventListener('mouseover', function() {
    div.style.backgroundColor = 'pink'
  })
})
