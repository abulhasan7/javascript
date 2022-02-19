let object = {name:'Abul Hasa',age:25};
console.log(object,typeof object)
//JSON is subset of javascript object, it's a data exchange format
// TO CONVERT JAVASCRIPT OBJECT TO JSON FORMAT 
//JSON will not accept '' , it'll only accept "", keys require "" in JSON
let objectJSN = JSON.stringify(object);
console.log(objectJSN,typeof objectJSN)

//to convert JSON to javascript format
let backtoobj = JSON.parse(objectJSN);
console.log(backtoobj,typeof backtoobj)
