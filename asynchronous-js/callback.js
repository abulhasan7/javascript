//callbacks are the old way of executing asynchronous programming in JS
//here, we'll pass a function as an argument to a function that's 
//executing asynchronously and then call that function at the end
let lists = ['Abul','Hasan','Mohammed']
function displayList(){
    setTimeout(()=>(lists.forEach(elem=>console.log(elem))),2000);
}

function addList(name,callback){
    setTimeout(()=>(lists.push(name)),2000);
    callback();
}
addList('Fahad',displayList);