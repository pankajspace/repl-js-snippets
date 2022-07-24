// The latest ECMAScript standard defines nine types:


// Six Data Types that are primitives, checked by typeof operator:

// undefined : typeof instance === "undefined"
// Boolean : typeof instance === "boolean"
// Number : typeof instance === "number"
// String : typeof instance === "string"
// BigInt : typeof instance === "bigint"
// Symbol : typeof instance === "symbol"


// Structural Types:

// Object : typeof instance === "object". Special non-data but Structural type for any constructed object instance also used as data structures: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date and almost everything made with new keyword;

// Function : a non-data structure, though it also answers for typeof operator: typeof instance === "function". This is merely a special shorthand for Functions, though every Function constructor is derived from Object constructor.

// Structural Root Primitive:
// null : typeof instance === "object". Special primitive type having additional usage for its value: if object is not inherited, then null is shown;



// This example will help you understand that primitive values are immutable.

// Using a string method doesn't mutate the string
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase();       // BAZ

// Using an array method mutates the array
var foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]