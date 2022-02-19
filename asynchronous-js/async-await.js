/*
IT'S MORE ELEGANT WAY OF HANDLING ASYNCHRONOUS FUNCTIONS THEN PROMISES
BASICALLY, YOU CREATE A FUNCTION AND LABEL IT WITH ASYNC KEYWORD
THEN INSIDE IT, YOU CALL THE SAME FUNCTION WHICH RETURNS PROMISE,
BUT INSTEAD OF DOING THEN() YOU LABEL IT WITH AWAIT
*/

let lists = ["Abul", "Hasan", "Mohammed"];
function displayList() {
  setTimeout(() => lists.forEach((elem) => console.log(elem)), 2000);
}

function addList(name) {
  //you return a promise using new Promise,
  //it handles a callback function with two callback functions
  //we'll based on error handling, either resolve or reject it
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let len = lists.push(name);
      //   len =0;
      if (len > 0) {
        resolve("resolved");
      } else {
        reject("Element not inserted");
      }
    }, 2000);
  });
}
//we then handle it using either then or catch
async function async_wait(){
    await addList("Fahad");
    displayList();
}

async_wait();

async function fetchapi(){
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let resjson = await res.json();
    console.log(resjson);
}

fetchapi();