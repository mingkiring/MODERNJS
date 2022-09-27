// 부모 생성자 함수
var Parent = (function (){
    //Constructor
    function Parent (name){
        this.name = name;
    }
    //method
    Parent.prototype.sayHi = function(){
        console.log('Hi!' + this.name);
    };

    //return constructor
    return Parent;
}());

// 자식 생성자 함수
var Child = (function(){
    //Constructor
    function Child(name){
        this.name = name;
    }
    //자식 생성자 함수의 프로토타입 객체를 부모 생성자 함수의 인스턴스로 교체
    Child.prototype = new Parent();

    //메소드 오버라이드
    Child.prototype.sayHi = function(){
        console.log('안녕하세요! '+ this.name);
    };
    //sayBye 메소드는 Parent 생성자 함수의 인스턴스에 위치한다. 
    Child.prototype.sayBye = function() {
        console.log('안녕히 가세요!!'+this.name);
    };
    //return constructor
    return Child;
}());

var child = new Child('child');
console.log(child);

console.log(Child.prototype);

child.sayHi();
child.sayBye();

