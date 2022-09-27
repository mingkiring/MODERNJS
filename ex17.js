/*
// 객체 리터럴
var obj1 = {};
obj1.name = 'Lee';

// Objec() 생성자 함수
var obj2 = new Object();
obj2.name='Lee';

// 생성자 함수 
function F(){}
var obj3 = new F();
obj3.name = 'Lee'; */

function Person(name){
    this.name = name;
} // 생성자 함수

Person.prototype.setName = function (name){
    this.name = name;
}; // 프로토타입 객체에 메소드 정의

Person.prototype.getName = function(name){
    return this.name;
};  // 프로토타입 객체에 메소드 정의 

var me = new Person('Lee');
var you = new Person('Kim');
var him = new Person('Choi');

console.log(Person.prototype);

console.log(me);
console.log(you);
console.log(him);