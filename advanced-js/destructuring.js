//destructuring is to take elements from objects and arrays and assign it to our own variables

//ARRAY DESTRUCTURING
let array = [1, 2, 3, 4, 5];
//only want first two values
//if using array destructuring, then use [] notation, else use {} for object destructuring
let [a, b] = array;
console.log(a);
let [c, , d] = array;
console.log(d);

let [e, f, , ...rest] = array;
console.log("f is ", f);
console.log("rest is ", rest);
//OBJECT DESTRUCTURING
let fullname = {
  firstname: "Abul Hasan",
  lastname: "Mohammed",
};
let { firstname, secondname } = fullname;
console.log(firstname);

//destructure and rename the variable
let { firstname: FN } = fullname;
console.log(FN);
//object destructuring at the function parameter defintion
function profile({ firstname, lastname, address = "529 S 10th Street" }) {
  console.log(firstname, lastname, address);
}
let profiles = {
  ...fullname,
};
profile(profiles);
//spread operator to combine two objects into  1 object
