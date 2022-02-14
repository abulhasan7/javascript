function function1(x,y){
    return x*y;
}

let a = function1(10,2);
console.log(a);
let b = function1(-1,'asdf')
console.log(b);

//default argument value at funciton definition

function myfunction(x,y=10){
    return x*y;
}

console.log(myfunction(19));