//Promise is a new way of handling asynchronous requests , since ES6
//Instead of passing a callback function, we return a promise
//from the function, and then we can handle it with then and catch
//much more clear way of handling asynchronous requests

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
addList("Fahad")
  .then((message) => {
    console.log("line 30" + message);
    displayList();
  })
  .catch((error) => console.log(error));

//Promise All
let promise1 = Promise.resolve("Hey");
let promise2 = "Hello";
let promise3 = new Promise((resolve, reject) => {
  resolve("Mohammed");
});
Promise.all([promise1, promise2, promise3, addList("Fahad")])
  .then((message) => {
      console.log("inside promise all");
    console.log("all" + message);
  })
  .catch((error) => console.log(error));
