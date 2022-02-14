//call -- binds objects to the function, the function can then use that object as if it belonged to the function
// and then executes the function
//when we don't want to couple object with a function, we can use this
let obj = { name: "Abul Hasan " };

function printName(lastName) {
  console.log(this.name + lastName);
}

printName.call(obj, "Mohammed");
//apply -- similar to call, but you'll have to pass an array to it, instead of all the args
let arrey = ["Mohammed"];
printName.apply(obj, arrey);

//bind binds an object to a function and then returns a new function, we can then use the reference to call the functin
//while call and apply executes the bounded function immediately, while bind doesn't
let binded = printName.bind(obj);

binded("Mohammed");

let binded2 = printName.bind(obj, "Mohammed");

binded2();
