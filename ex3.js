var emptyObject = {};
console.log(typeof emptyObject);

var person = {
    name:'Min',
    gender:'Female',
    sayHello:function(){
        console.log('Hi! My name is '+this.name);
    }
};

console.log(typeof person);
console.log(person);

person.sayHello();

var a =1;
var b =a;

console.log(a,b);
console.log(a==b);

a =10;
console.log(a,b);
