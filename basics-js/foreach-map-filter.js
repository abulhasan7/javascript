const objects = [
    {
        id : 1,
        name : 'Abul',
        isCompleted : false
    },
    {
        id : 2,
        name : 'Hasan',
        isCompleted : true
    },
    {
        id : 3,
        name : 'Mohammed',
        isCompleted : true
    }
]

//for-each, basically looping through only
objects.forEach(function(object){
    console.log(object);
});

//map, loops through the iterable and then map it to something else
//it returns an array that contains the mapped values
const returned = objects.map(function(object){
    return object.id;
});
console.log(returned)

//filter, loops through and filters the element not needed
const returned_filtered = objects.filter(function(object){
    return object.isCompleted == true;
}).map(function(object){
    return object.name;
})
console.log(returned_filtered)