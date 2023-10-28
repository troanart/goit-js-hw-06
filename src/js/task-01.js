
const parameter = document.querySelector('#categories');
    


function numberCounter(list) {
    let total = 0 ;
    let numbersFirst = 0;
    let numbersThree = 0;
    let numbersSecond = 0;

    list.querySelectorAll(".item").forEach((e) => total++) 
    console.log(`Number of categories: ${total}`);

    let firstName = list.firstElementChild.querySelector("h2").innerHTML ;
    console.log(`Category: ${firstName}`);

    list.firstElementChild.querySelectorAll("li").forEach((e) => numbersFirst++);
    console.log(`Elements: ${numbersFirst}`);

    let therdName = list.lastElementChild.querySelector("h2").innerHTML ;
    console.log(`Category: ${therdName}`);
    
    list.lastElementChild.querySelectorAll("li").forEach((e) => numbersThree++);
    console.log(`Elements: ${numbersThree}`);

    let secondName = list.lastElementChild.previousElementSibling.querySelector("h2").innerHTML ;
    console.log(`Category: ${secondName}`);

    list.lastElementChild.previousElementSibling.querySelectorAll("li").forEach((e) => numbersSecond++);
    console.log(`Elements: ${numbersSecond}`);
    
}


console.log(numberCounter(parameter))







  



