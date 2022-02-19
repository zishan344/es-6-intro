const add = () => "bosir ahmod";
const add2 = (num1) => num1 + 2;
const add3 = (num1) => num1 + 10;
//multiline arrow function
const add4 = (num1, num2 = 4) => {
  const sum = num1 + num2;
  const result = sum * 10;
  return result;
};
console.log(add());
console.log(add2(10));
console.log(add3(10));
console.log(add4(10, 10));
