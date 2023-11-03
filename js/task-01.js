"use strict"

const ulCategories =  document.getElementById("categories").children.length;
console.log(`Number of categories: ${ulCategories}`);

const titleAndCategoryRefs = document.querySelectorAll('h2');
titleAndCategoryRefs.forEach((elemtnt) => {
    console.log(`Category: ${elemtnt.textContent}`)
    console.log(`Elements: ${elemtnt.nextElementSibling.children.length}`)
})



  



