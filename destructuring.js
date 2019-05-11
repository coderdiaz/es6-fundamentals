// ES5 destructuring
// var someArray = ['John Doe', 'Bruce Wayne', 'The Jocker'];
// var john = someArray[0];
// var bruce = someArray[1];
// var jocker = someArray[2];

// var someObject = { data: { name: 1 }};
// var name = someObject.data.name;

// ES6 Destructuring
const someArray = ['John Doe', 'Bruce Wayne', 'The Jocker'];
let [john, ...other] = someArray
console.log(other);

const props = { author: 'John', type: 'POST' };
const { type, author } = props;
console.log(type)
