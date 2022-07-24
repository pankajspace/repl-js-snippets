// Array.from(arrayLike [, mapFn [, thisArg]])
const set = new Set(['foo', 'bar', 'baz', 'foo']);
const array0 = Array.from(set);  
console.log(array0) // [ "foo", "bar", "baz" ]
// ---------------------------------------------------- 


// Array.isArray(value)
// -------------------------------------------------------


// arr.fill(value[, start[, end]])
const array6 = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
console.log(array6.fill(0, 2, 4));  // [1, 2, 0, 0]
// fill with 5 from position 1
console.log(array6.fill(5, 1)); // [1, 5, 5, 5]
console.log(array6.fill(6));  // [6, 6, 6, 6]
// -------------------------------------------------------------


// var newArray = arr.flat([depth]);
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat()); // [0, 1, 2, 3, 4]
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));  // [0, 1, 2, [3, 4]]
// --------------------------------------------------------------


// for (variable in object) { statement }
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
} // "a: 1" "b: 2" "c: 3"
// --------------------------------------------------------------


// for (variable of iterable) { statement }
const iterable = [10, 20, 30];
for (const value of iterable) {
  console.log(value);
} // 10 20 30
// --------------------------------------------------------------


// arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
// forEach() does not mutate the array on which it is called. (However, callback may do so)
// There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.
// -----------------------------------------------------------------------


// let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);  // Array ["exuberant", "destruction", "present"]
// --------------------------------------------------------------------------


// arr.find(callback(element[, index[, array]])[, thisArg])
const array7 = [5, 12, 8, 130, 44];
const found = array7.find(element => element > 10);
console.log(found); // 12
// -------------------------------------------------------------------------


// arr.findIndex(callback( element[, index[, array]] )[, thisArg])
const array8 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array8.findIndex(isLargeNumber)); // 3
// -------------------------------------------------------------------------


// arr.includes(valueToFind[, fromIndex])
const array9 = [1, 2, 3];
console.log(array9.includes(2));  // expected output: true
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));  // expected output: true
console.log(pets.includes('at')); // expected output: false
// ------------------------------------------------------------------------


// arr.every(callback(element[, index[, array]])[, thisArg])
const array4 = [1, 30, 39, 29, 10, 13];
console.log(array4.every( item => item < 40));  // true
// -------------------------------------------------------------------------


// arr.some(callback(element[, index[, array]])[, thisArg])
const array5 = [1, 30, 39, 29, 10, 13];
console.log(array5.some( item => item % 2 === 0));  // true
// -------------------------------------------------------------------------


// const new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])
// original array is not altered
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);  // Array ["a", "b", "c", "d", "e", "f"]
// ------------------------------------------------------------------------ 


// let slicedArray = arr.slice([start[, end]])
// original array is not altered
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));  // expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5)); // expected output: Array ["bison", "camel", "duck", "elephant"]
// --------------------------------------------------------------------


// let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// original array is altered
let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed = myFish.splice(3, 1) // removes 1 element at index 3
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // inserts at index 1
console.log(months);  // expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May'); // replaces 1 element at index 4
console.log(months);  // expected output: Array ["Jan", "Feb", "March", "April", "May"]
// ---------------------------------------------------------------------


// split and join
// replace all occurences of a sunstring in a string
let str = 'we will we will rock you';
let newStr = str.split("we").join("I");
console.log(newStr);  //I wii I will rock you
// ------------------------------------------------------------------------


// arr.sort([compareFunction])
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];
// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});
// sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
});
// ----------------------------------------------------------------------


// a.reverse()
const a = [1, 2, 3];
a.reverse(); 
console.log(a); // [3, 2, 1]
// ----------------------------------------------------------------------



