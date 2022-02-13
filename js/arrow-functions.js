function doWork(x){
    return x*10;
}
//function to arrow function
const doWorkA = x => x*10;


console.log(doWork(10));
console.log(doWorkA(10));

function doDoubleWork(x=10,y){
    const z = x === 10?15:20;
    return z*y;
}

//arrow

const doDoubleWorkA = (x=10,y)=>{
    const z = x === 10?15:20;
    return z*y;
}

console.log(doDoubleWork(20,10))
console.log(doDoubleWorkA(20,10))

