function Person(name,gender){
    var married = true;
    this.name=name;
    this.gender=gender;
    this.sayHello=function(){
        console.log("Hello! "+this.name);
    };

}
var person1 = new Person('Min',"Female");
var person2= new Person('Shin','Male');

console.log(person1);
console.log(person2);

console.log(person1.married);
console.log(person1.name);