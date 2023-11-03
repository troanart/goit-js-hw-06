function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const amountEl = document.querySelector('input');
const createEl = document.querySelector('button[data-create]');
const destroyEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');



createEl.addEventListener('click', function() {
  let amount = amountEl.value;
  if(amount > 0) {
    createBoxes(amount);
  }
});

destroyEl.addEventListener('click', function() {
  boxesEl.innerHTML = '';
});


function createBoxes(amount) {
  for(let i = 0; i < amount; i++) {
    let elem = document.createElement('div');
    
    elem.style.width = 30 + (10 * i)+'px';
    elem.style.height = 30 +'px';
    elem.style.backgroundColor = getRandomHexColor();
    
    boxesEl.append(elem);
  }
}
  

  

















 




