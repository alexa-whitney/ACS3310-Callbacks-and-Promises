// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("--- Oops ---");
    resolve('>>> Success! <<<');
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('>>> Success! <<<');
    reject("--- Oops ---");
  }, 2000);
});

p2.then((message) => {
  console.log('Promise 2 resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise 2 rejected! 😞');
  console.log(err);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('>>> First Success! <<<');
    resolve('>>> Second Success! <<<');
    reject("--- Oops after resolve ---");
  }, 2000);
});

p3.then((message) => {
  console.log('Promise 3 resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise 3 rejected! 😞');
  console.log(err);
});


// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
// alexawhitney@Alexas-MacBook-Pro callbacks-and-promise-main % node Promise-1/index.js
// Promise rejected! 😞
// --- Oops ---//
// This demonstrates that when the promise is rejected, the code inside the .catch() block is executed.


// **2)** What happens when you call both `resolve` and `reject`? Test this.
// Only the first one that's called will take effect, and the subsequent one will be ignored.


// **3)** Does the order matter you call resolve and reject matter? Test this. 
// Yes, the order matters. When either resolve or reject is called, the promise's state changes. 
// Once a promise's state has changed (from "pending" to either "fulfilled" or "rejected"), it cannot 
// change again. When you run the above code, you'll see that the promise p2 resolves successfully, and 
// the reject call has no effect.


// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
// Once a promise is either resolved or rejected, its state cannot change. Therefore, calling resolve or 
// reject more than once will have no effect after the first call (as tested in p3).
