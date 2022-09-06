var x=5;
var y=6;
var z =x+y;
var type = typeof '1';
var type2= typeof 1;

function square(num){
    return num* num;
}
console.log(square(2));
console.log(z);
console.log(type);
console.log(type2);

var person={
    name:'Lee',gender:'man',sayhello:function(){
        console.log('Hello'+this.name);
    }
};

console.log(typeof person);
console.log(person);
person.sayhello();

var arr=[1,2,3,4,5];
var i=0;
while(i<5){
    console.log(arr[i]);
    i=i+1;
}

var pInf=10/0;
console.log(pInf);