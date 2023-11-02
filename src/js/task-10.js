function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('button[data-create]')
createButton.addEventListener("click",createNewEl)
// console.log(createButton)
const divMenu = document.querySelector('#boxes')
// console.log(divMenu)
let amount;
const inputEl = document.querySelector("input");
inputEl.addEventListener('change', (event) => {
  console.log(amount = event.currentTarget.value) ;
})



function createNewEl() {
  let array = []
  for(let i; i <= amount ; i++) {
   let newDiv = document.createElement('div')
    newDiv.style.backgroundColor = `${getRandomHexColor()}`
    newDiv.style.width = "30px"
    newDiv.style.height = "30px"
    
   return array.push(newDiv)
  }

  

  
  return .append(...array)
  
}












// let elements = [];

// function createElement (amount) {
//   for(let i = 0; i <= amount; i++) {
//     const newElement = document.createElement('div')
//     newElement.style.backgroundColor = `${getRandomHexColor()}`
//     newElement.style.width = "30px"
//     newElement.style.height = "30px"
//     elements.push(newElement)
//   }

//   return divMenu.append(...elements)
// }

// console.log(createElement())







 




