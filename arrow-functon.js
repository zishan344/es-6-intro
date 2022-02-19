// funciton declaration
function add(num1, num2) {
  return num1 + num2;
}
// funciton expression
var add2 = function add2(num1, num2) {
  return num1 + num2;
};

// functios expression annonimus
const add3 = function (num1, num2) {
  return num1 + num2;
};

const add4 = (num1, num2) => num1 + num2;

console.log(add(3, 5));
console.log(add2(3, 5));
console.log(add3(3, 5));
console.log(add4(3, 5));
