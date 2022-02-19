//template string and strin concatenation
const name = 'Abul Hasan';
const years = 25;
//This is called as string concatenation
console.log('Hello my name is '+name+'And im ' + years+' old');
//This is called as template strings
const greeting = `Hello my name is ${name} and I'm ${years} old`;
console.log(greeting)

//Properties & methods
console.log(greeting.length)
console.log(greeting.toUpperCase())
console.log(greeting.substring(0,1))

let string = "Mohammed, Abul, Hasan";
console.log("checking includes",string.includes("Mohammed"));
console.log("checking includes from a specified index",string.includes("Mohammed",1));

//split splits the string into an array of strings based on the separator provided as input
//1st string is the string till the separator
//2nd string is the string after the separator till the next separator and so on
let split = string.split(", ");
console.log(split)
//slice returns a part of the string from the given string, starts from the 1st param till the index not including the 2nd param
//so it's basically a substring of the string
let slice = string.slice(0,9);
console.log(slice);
//splice allows you to remove elements from the array, from a specified index, while also allowing you to add elements from the same index
let numbers = [1,2,3,4,5]
//delete two elemnts from the array from the first index
numbers.splice(0,2)
console.log(numbers);

//add elements to the 1st index while deleting two elements
numbers.splice(0,2,1,2)
console.log(numbers);

//add elements to the 1st index while not deleting any elements
numbers.splice(0,0,-1,0)
console.log(numbers);
//indexOf

//replace

//replaceAll