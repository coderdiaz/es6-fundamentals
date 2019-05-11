// ES5 Variables
// var variable = 5;
// {
//   console.log('inside', variable);
//   var variable = 10;
// }
// console.log('outside', variable);

// ES6 Variables
let variable = 5;
{
  console.log('inside', variable);
  let variable = 10;
  console.log('inside', variable);
}
console.log('outside', variable);