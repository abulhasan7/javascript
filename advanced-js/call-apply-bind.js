//call -- binds objects to the function, the function can then use that object as if it belonged to the function
// and then executes the function
//when we don't want to couple object with a function, we can use this

//apply -- similar to call, but you'll have to pass an array to it, instead of all the args

//bind binds an object to a function and then returns a new function, we can then use the reference to call the functin
//while call and apply executes the bounded function immediately, while bind doesn't

const john = {
  name: 'John',
  age: 24,
};

function greeting() {
  console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
}

const greetingJohn = greeting.bind(john);
// Hi, I am John and I am 24 years old
greetingJohn();

// Hi, I am John and I am 24 years old
greeting.call(john);

// Hi, I am John and I am 24 years old
greeting.apply(john);
