//Two Types-- Primitive type & Reference Type
//Primitive type will be number,string,boolean, undefined and null
//Reference type will be object, array and function
//Var is global scoped, while let and const is block scoped
let variable1 = 'Abul Hasan';
variable1 = 'Mohammed';
console.log(variable1, typeof variable1)
variable1 = 10.0;
console.log(variable1, typeof variable1)
variable1 = false;
console.log(variable1, typeof variable1)
variable1 = undefined;
//undefined can be a value, as well as type
console.log(variable1, typeof variable1)
variable1 = null;
console.log(variable1, typeof variable1)

const variable2 = 'Abul Hasan';
console.log(variable2)
//Cannot assign variable values after assignment, which was done already in the previous step
//use const, unless you know that you're gonna reassign the value of the variable
variable2 = 'Mohammed';
console.log(variable2)
