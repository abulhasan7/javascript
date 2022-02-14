//array literal []
//we can dynamically change size of array, array can have multiple types as well
let arrey = ['Abul','Hasan']
arrey[2] = 25;
console.log(arrey)

console.log(arrey.length);

//inserts element at the start
console.log(arrey.unshift(1))
console.log(arrey)

//removes last element
console.log(arrey.pop())
console.log(arrey)

console.log(arrey.indexOf('Abul'));
//inserts element at the end
console.log(arrey.push('Mohammed'))
console.log(arrey)

//array includes -- check whether the given item exist or not in the array from the given index

console.log(arrey)
//without the index
console.log(arrey.includes("Mohammed"));

//with  the index
console.log(arrey.includes("Abul",1));

//with  the index
console.log(arrey.includes("Abul",2));