//프로퍼티
function multiply(x,y){
    console.log(arguments);
    console.log(x,y);
    return x*y;
}

multiply();
multiply(1);
multiply(1,2);
multiply(1,2,3);