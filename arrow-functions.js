// ES5 Functions
// var options = { elements: 1, total: 10 };
// function getData(message, options) {
//   if (options) {
//     return options;
//   }
//   return message;
// }

// var value = getData('Hi', { elements: options.elements });
// console.log(value);


// ES6 Arrow functions
// const sum = (x, y) => {
//   return x + y;
// }

const sum = (x, y) => x + y;
console.log(sum(1, 2));

//  const sum = (x) => {
//   return (y) => {
//     return x + y;
//   }
// }

const sum2 = (x) => (y) => x + y;
console.log(sum(1)(2));