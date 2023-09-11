function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof name === 'string') { 
        resolve('hello ' + name);
      } else {
        reject('Greet expects a string!');
      }
    }, 1000);
  });
}

function uppercaser(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if (typeof str === 'string') {
        resolve(str.toUpperCase());
      } else {
        reject('Argument to uppercaser must be string');
      }
    }, 1000);
  });
}


// Above we have two functions that return promises. 
// These are greet and uppercaser. 
// Notice below how we chain these promises together. The 
// Result of one is then passed to the next. 
// When chained all of the promises have to resolve for success. 
// If any of the promises reject then you end in the catch block. 

greet('Your name') // Returns a Promise
  .then(str => uppercaser(str))  // Upper case the results from greet() Returns a Promise
  .then(str => console.log(str)) // Log the results of uppercaser()
  .catch(err => console.log(err)) // Catches an error

// Challenges: get greet() to fail by passing a non string value
// What happens? 
greet(12345)
  .then(str => uppercaser(str))
  .then(str => console.log(str))
  .catch(err => console.log(err));
/* The greet() function checks if the input is a string. Since we passed a number, it rejects the promise 
 with the error message 'Greet expects a string!'. The error is then caught by the .catch() at the end. 
*/

// Challenge: get uppercaser() to fail by passing a non string value
// What happens?
uppercaser(12345)
  .then(str => console.log(str))
  .catch(err => console.log(err));
/* The uppercaser() function checks if the input is a string. Since we passed a number, it rejects the promise 
 with the error message 'Argument to uppercaser must be string'. The error is then caught and printed. 
/* 

 
// Challenge: Notice there is only a single .catch() at the end. 
// Explain the behavior?
/* The behavior of promises allows for a single .catch() to handle any rejections in the promise chain. 
If any promise in the chain rejects, the chain is broken, and the control is immediately passed to the 
nearest .catch() down the chain. This is one of the significant benefits of using promises over traditional 
callbacks because it allows for centralized error handling. Instead of having multiple error handlers 
(like you might have with nested callbacks), you can have just one .catch() at the end to handle any errors 
that may occur in any of the preceding promises. This leads to cleaner and more maintainable code.
*/
