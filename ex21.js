//20220928
var o = new Object();
console.log(typeof o + ':',o);

o =new Object(undefined);
console.log(typeof o +':',o);

o = new Object(null);
console.log(typeof o + ':',o);

var obj = new Object('String');
console.log(typeof obj + ':',obj);
console.dir(obj);

var obj = new Object(123);
console.log(typeof obj + ':',obj);

var numobj = new Number(123);
console.log(typeof numobj + ':',numobj);

var obj = new Object(true);
console.log(typeof obj + ':',obj);

var boolobj = new Boolean(123);
console.log(typeof boolobj + ':',boolobj);

var adder = new Function('a','b','return a+b');

adder(2,8);
console.log(adder(2,8));