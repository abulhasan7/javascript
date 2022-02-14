//SPREAD OPERATOR IS TO SPREAD/EXPAND THE ARRAY/OBJECT
//to get the rest of the variables from the array
let [a,b,...rest] = [1,2,3,45]
console.log(rest);

//to copy elements of array into an array instead of an array inside array
let arr = [1,2,3,4,5]
//this creates array inside array
let arrinarr = [arr]
console.log("arrinarr is ",arrinarr);
let eleminarr = [...arr];
console.log("eleminarr is ",eleminarr);

let firstobject = {firstname:'Abul Hasan'};
let secondobject = {secondname:'mohammed'};
//to combine two objects in to 1
let thirdobject = {...firstobject,...secondobject};
console.log(thirdobject);

//combine two arrays into 1
let array1 = [1,2,3];
let array2 = [4,5];
let combinedarray = [...array1,...array2];
console.log(combinedarray);

//REST Operator
//whenever we write ...<Argname> inside the functin definition, then its called rest operator
//it allows us to pass as many arguments to the function, it'll then convert those elements into an array

function multiply(multiplier, ...args){
        return args.map(arg=>arg*multiplier);
}

console.log(multiply(2,1,2,3,4,5));