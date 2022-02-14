// a function bundled along with it's lexical cope is called closure

//this is one example of closure
let a = 110;

function x (b){
    return a*b;
}

console.log(x(0));

function a1(x2){
    let x1 = 10;
    return function a2(x3){
        return x1+x2+x3+a;
    }
}

let returned = a1(5);
console.log(returned(2));