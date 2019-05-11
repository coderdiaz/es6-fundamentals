// ES5 String template
// var name = 'Bedu';
// var htmlElement = '<div class="alert">' + name + '</div>';

// ES6 String template
let name = 'Bedu';
let htmlElement = `
  <div class="alert">
    ${name}
  </div>
`;
console.log(htmlElement);
