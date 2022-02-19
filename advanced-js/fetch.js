//fetch can be used to make asynchronous calls to apis/endpoints etc to fetch data

const resp = fetch("https://jsonplaceholder.typicode.com/todos/1");
console.log('resp is '+resp);
//response.json returns a Promise, so we have to again do .then()
//if an error occurs, then it doesn't throw promise reject, we have to manually
//check the response.status to see if the request passed or failed
fetch("https://jsonplaceholder.typicode.com/todos/1")
    //the first then is when we get even a little data, like header etc, not complete yet
  .then((response) => {console.log(response);return response.json();})
  //then res.json() also, returns a promise and its fulfilled when whole body is avaialable
  //and convertible to JSON
  .then(data => {
    console.log("resp2 is " + JSON.stringify(data));
  })
  .catch((err) => console.log(err));
