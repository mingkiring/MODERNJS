{
    var foo =10;
    console.log(foo);
}//블록문

var x=0; 
while(x<10){
    x++;
}//조건문
console.log(x);

function sum(x,y){
    return x+y;
}//함수 선언문 
console.log(sum(1,2));

var num  =2;
var kind;

if(num>0){
    kind='양수';
}
console.log(kind);

if(num>0){
    kind='양수';
}else {
    kind='음수';
}
console.log(kind);

outer: {
    console.log(1);
    console.log(2);
    break outer;
}
console.log('Done');