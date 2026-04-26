let but = document.querySelector('.main_button')
let score = document.querySelector('.score')
let moni = document.querySelector('.moni')
let score2 = 0
let lives = 5
let over = "Всё, капут"
score.innerHTML = score2;
const colors = ['red', 'yellow', 'green'];
let currentIndex = 0;

setInterval(function() {
  let nextColor = colors[currentIndex];
  

  moni.style.backgroundColor = nextColor;
  
  currentIndex = (currentIndex + 1) % colors.length;
}, 1000); 




but.addEventListener('click', function() {
    let currentColor = moni.style.backgroundColor;
  console.log("pressed"+currentColor);
    if (currentColor == 'green') {
      score2 += 10;
    } else if (currentColor == 'red') {
      score2 -= 3;
    }
     else if (currentColor == 'yellow') {
        score2 -= 0;
    }
    score.innerHTML = score2;
    

})

