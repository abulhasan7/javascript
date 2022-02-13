const x = 10;
//== Doesn't match types
if(x=='10'){
    console.log('==EQUAL')
}

//=== matches type and value as well
if(x ==='10'){
    console.log('=== EQUAL')
}
//ternary operator
const y = x===10? 20:10;
console.log(y)

//AND //OR
if(x===10 && y===10){

}else if(x===10 || y===10){

}

let a = false;
a = !a;
console.log(a);