// ES5
// function sum (x, y, z) {}
// var args = [1, 2, 3];
// sum.apply(null, args);

// ES6
const sum = (x, y, z) => {}
const args = [1, 2, 3];
sum(...args) // sum(1,2,3)

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log(array1.concat(array2)); // ES5
console.log([...array1, ...array2]) // ES6