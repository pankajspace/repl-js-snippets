// Question: How would you implement currying for any functions?
// What is curring: Curring is partial invocation of a function.Currying means first few arguments of a function is pre­processed and a function is returned.The returning function can add more arguments to the curried function.It's like if you have given one or two spice to the curry and cooked little bit, still you can add further spice to it. A simple example will look like 
function addBase(base) {
  return function(num) {
    return base + num;
  }
}
var addTen = addBase(10);
console.log(addTen(5));
console.log(addTen(80));
console.log(addTen(-5));


// Explanation: You are creating a closure that return a function.When you are curring with a new number, new number is added to the base you have provided.
// Answer: You can add a curry method to the prototype of Function.If now parameters is passed to curry, you simply return the current function.If you have provided arguments to curry there are two steps
// ● Step­1: Concatenate old arguments(provided while creating curry), with new arguments(added after cooking little bit) by using args.concat(toArray(arguments))
// ● Step­2: Pass all the arguments to the function by using apply.
// ● Extra: Just be careful to retain the value of this.

Function.prototype.curry = function() {
  if (arguments.length < 1) {
    return this; //nothing to curry. return function 
  }
  var self = this;
  var args = toArray(arguments);
  return function() {
    return self.apply(this, args.concat(toArray(arguments)));
  }
}
function toArray(args) {
  return Array.prototype.slice.call(args);
}

// To use it: Just pass the argument to the function.curry method and a function will be returned.Use returned function for further currying 
var converter = function(factor, symbol, input) {
  return input * factor + symbol;
}

var milesToKm = converter.curry(1.62, 'km');
console.log(milesToKm(3));

var kgToLb = converter.curry(2.2, 'lb');
console.log(kgToLb(3)); 