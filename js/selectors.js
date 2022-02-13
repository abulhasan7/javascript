//SINGLE ELEMENT SELECTOR
const elem  = document.getElementById("id1");
console.log(elem)
const elem1 = document.querySelector("#id1");
console.log(elem1)
//MULTIPLE ELEMENTS SELECTOR


const elem2  = document.getElementsByClassName("noclass");
console.log(elem2)
const elem3 = document.querySelectorAll(".noclass");
console.log(elem3)

elem.remove();