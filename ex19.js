// 부모 생성자 함수
var Parent  = ( function(){
    //Constructor
    function Parent(name){
        this.name = name;
    }
    //method
    Parent.prototype.sayHi = function(){
        console.log('Hi!' + this.name );
    };
    //return constructor
    return Parent;
}());

//create 함수의 인수는 프로토타입이다.
var child = Object.create(Parent.prototype);
child.name ='child';

child.sayHi();
