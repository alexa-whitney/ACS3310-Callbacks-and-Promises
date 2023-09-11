function whatToEat(timeOfDay) {
  // Create a new promise and return it here
  return new Promise((resolve, reject) => {
    switch(timeOfDay) {
      case 'breakfast':
        resolve('lox and bagels');
        break;
      case 'lunch':
        resolve('tuna salad');
        break;
      case 'dinner':
        resolve('sushi');
        break;
      default:
        reject("I don't eat between meal snacks!");
    }
  })
}

// whatToEat should return a promise. 
// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
// resolve the promise with your favorite food for that time. 
// If the `timeOfDay` is anything else reject the promise with 
// the the message: "I don't eat between meal snacks!"

// Handle the Promise returned from whatToEat here: 

whatToEat('breakfast')
.then(food => console.log(`For breakfast, I like to eat: ${food}`))
.catch(err => console.log(err));

whatToEat('lunch')
.then(food => console.log(`For lunch, I like to eat: ${food}`))
.catch(err => console.log(err));

whatToEat('dinner')
.then(food => console.log(`For dinner, I like to eat: ${food}`))
.catch(err => console.log(err));

// Handle this Promise: 
whatToEat('elevens')
.then(food => console.log(`For elevens, I like to eat: ${food}`))
.catch(err => console.log(err));
