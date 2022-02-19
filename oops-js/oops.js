//Object.assign , copies all properties from 1-more parent objects to target object

let object1 = {
    firstname: 'Abul'
}

let object2 = {
    lastname: 'Mohammed'
}

let object3 = {}; 
Object.assign(object3,object1,object2);

console.log(object3);