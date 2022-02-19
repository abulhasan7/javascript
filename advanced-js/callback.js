// when a function is passed as an argument to another function, 
//its called a callback funciton.
//you can either pass the reference to the function or you can pass
//the function itself

let ascendingName = function (x,y){
    return x.name>y.name?1:-1;
}

function descendingName(x,y){
    return x.name>y.name?-1:1;
}

let arrey = [
    {
        name: 'AAA',
        age: 25
    },
    {
        name: 'ABC',
        age: 26
    },
    {
        name: 'ADE',
        age: 35
    },
    {
        name: 'ZAD',
        age: 12
    }
]

arrey.sort(descendingName);

console.log(arrey);


arrey.sort(ascendingName);

console.log(arrey);