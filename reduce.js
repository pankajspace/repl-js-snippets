// average using reduce
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const avg = array.reduce(reducer, 0) / array.length;
// console.log(avg);

// finding balanced paranthesis

function checkBalancedParanthesis(str) {
  return !str.split("").reduce(function(acc, curr) {
    if (acc < 0) {
      return ++acc;
    }
    if (curr == "(") {
      return ++acc;
    }
    if (curr == ")") {
      return --acc;
    }
    return acc;
  }, 0);
}
console.log(checkBalancedParanthesis(")())(("));
console.log(checkBalancedParanthesis("(())"));


