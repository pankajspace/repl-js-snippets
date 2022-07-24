var a = { a: 1 };
var b = { a: 1 };
console.log("a == b", a == b);
console.log("a === b", a === b);
var c = a;
console.log("a == c", a == c);
console.log("a === c", a === c);

console.log("-------------------------------------");

console.log("null == undefined", null == undefined);
console.log("null == NaN", null == NaN);
console.log("undefined == NaN", undefined == NaN);
console.log("NaN == NaN", NaN == NaN);

console.log("-------------------------------------");

console.log("null === undefined", null === undefined);
console.log("null === NaN", null === NaN);
console.log("undefined === NaN", undefined === NaN);
console.log("NaN == NaN", NaN == NaN);

console.log("-------------------------------------");

console.log("false % 1", false % 1);
console.log("'' % 1", '' % 1);
console.log("[] == true", [] == true);

console.log("-------------------------------------");

function isTwoPassed() {
  var args = Array.prototype.slice.call(arguments);
  return args.indexOf(2) != -1;
}
isTwoPassed(1, 4) //false 
isTwoPassed(5, 3, 1, 2) //true 

console.log("-------------------------------------");

console.log("typeof []", typeof []);
console.log("typeof NaN", typeof NaN);
console.log("typeof null", typeof null);
console.log("2 + true", 2 + true);
console.log("'6' + 9", '6' + 9);
console.log("4 + 3 + 2 + '1'", 4 + 3 + 2 + '1');
console.log("'1' + 2 + 4", '1' + 2 + 4);
console.log("-'34' + 10", -'34' + 10);
console.log("+ 'dude'", + 'dude');

console.log("-------------------------------------");

var y = 1, x = y = typeof x;
console.log("x", x);

console.log("-------------------------------------");

var d = (2, 3, 5);
console.log("d", d);

console.log("-------------------------------------");

var e = (1, 5 - 1) * 2;
console.log("e", e);

console.log("-------------------------------------");

console.log("!'bang'", !'bang');
console.log("parseFloat('12.3.4')", parseFloat('12.3.4'));
console.log("Math.max([2, 3, 4, 5])", Math.max([2, 3, 4, 5]));
console.log("3 instanceof Number", 3 instanceof Number);
console.log("!!function() { }", !!function() { });
console.log("typeof bar", typeof bar);
console.log("typeof null", typeof null);

console.log("-------------------------------------");

var f = 2, g = 3;
console.log("f && g", f && g);

console.log("-------------------------------------");

var foo = 'outside';
function logIt() { console.log("foo", foo); var foo = 'inside'; }
logIt();

console.log("-------------------------------------");

console.log("-5 % 2", -5 % 2);
console.log(".1 + .2 != .3", .1 + .2 != .3);
// console.log("42.toString()", 42.toString());  //SyntaxError
console.log("42..toString()", 42..toString());
// console.log("4.2..toString", 4.2..toString);  //SyntaxError
console.log("2 in [1, 2]", 2 in [1, 2]);

console.log("-------------------------------------");

// function log() {
//   var args = Array.prototype.slice.call(arguments);
//   args.unshift('(app)');
//   console.log.apply(console, args);
// }
// log('my message'); //(app) my message 
// log('my message', 'your message'); //(app) my message your message 

console.log("-------------------------------------");

var h = 1;
function i() {
  h = 10;
  return;
  function h() { }
}
i();
console.log("h", h);

console.log("-------------------------------------");

var myObject = {
  price: 20.99,
  get_price: function() {
    return this.price;
  }
};
var customObject = Object.create(myObject);
customObject.price = 19.99;
delete customObject.price;
console.log("customObject.get_price()", customObject.get_price());

console.log("-------------------------------------");

var num = 10;
var name = "Addy Osmani";
var obj1 = {
  value: "first value"
};
var obj2 = {
  value: "second value"
};
var obj3 = obj2;
function change(num, name, obj1, obj2) {
  num = num * 10;
  name = "Paul Irish";
  obj1 = obj2;
  obj2.value = "new value";
}
change(num, name, obj1, obj2);
console.log("num", num);
console.log("name", name);
console.log("obj1.value", obj1.value);
console.log("obj2.value", obj2.value);
console.log("obj3.value", obj3.value);

console.log("-------------------------------------");

// In JavaScript isNaN(undefined) returns true.how could you fix it ? 
function isReallyNaN(x) { return x !== x; }
console.log("isReallyNaN(undefined)", isReallyNaN(undefined));

console.log("-------------------------------------");

(function() {
  var j = k = 3; // Silently assigns 3 to a global variable k
})();
console.log("typeof j", typeof j);
console.log("k", k);

console.log("-------------------------------------");

let company = "HCL";
console.log("typeof company", typeof company);

console.log("-------------------------------------");

var hcl = new Array(4).toString()
console.log("hcl", hcl);

console.log("-------------------------------------");

console.log("[]+[]+'HCL'.split('')", [] + [] + 'HCL'.split(''));

console.log("-------------------------------------");

var hclArr = [];
hclArr[0] = "HTML";
hclArr[1] = "CSS";
hclArr.script = "JavaScript";
console.log("hclArr.length", hclArr.length);

console.log("-------------------------------------");

var hcl2 = "Schools";
var hcl3 = hcl2.lastIndexOf("s");
console.log("hcl3", hcl3);

console.log("-------------------------------------");

if (String('Hello') === 'Hello') {
  console.log("Welcome HCL");
}

console.log("-------------------------------------");

function* increment() {
  var counter = 0;
  for (let i = 0; i < 10; i++) {
    yield counter++;
  }
}
var counterIncrement = increment();
counterIncrement.next();
counterIncrement.next();
console.log("counterIncrement.next().value", counterIncrement.next().value)

console.log("-------------------------------------");

function aaa() {
  return {
    test: 1
  }
}
console.log("typeof aaa()", typeof aaa());

console.log("-------------------------------------");

function bbb() {
  return aasd = 10;
}
console.log("bbb()", bbb())

console.log("-------------------------------------");

var t1 = "bangalore";
console.log("t1.substring(4, 6)", t1.substring(4, 6))

console.log("-------------------------------------");

let fruits = ["a", "o", "g", "m"];
let [hcl4, ...hcl5] = fruits;
console.log("hcl4, hcl5", hcl4, hcl5)

console.log("-------------------------------------");

if (9 > 7 > 3) {
  console.log("9 > 7 > 3", true)
} else {
  console.log("9 > 7 > 3", false)
}

console.log("-------------------------------------");

var t1 = 3;
var t2 = 3;
var result = eval("t1*t2")
console.log("result", result)

console.log("-------------------------------------");

let hcl6 = [];
// for (let { x = 2, y } of [{ x: 1 }, 2, { y }]) {
//   hcl6.push(x, y)
// }
console.log("hcl6", hcl6)

console.log("-------------------------------------");

var myarr = ["h", "c", "j"]
myarr[2]
console.log("2 in myarr", 2 in myarr)

console.log("-------------------------------------");

console.log("3" - -"3");

console.log("-------------------------------------");

var x = 10;
var level1 = {
  x: 20,
  level2: {
    x: 30,
    level3: function() {
      return this.x;
    }
  }
}
var fun = level1.level2.level3;
console.log("fun()", fun());
console.log("level1.level2.level3()", level1.level2.level3());

console.log("-------------------------------------");