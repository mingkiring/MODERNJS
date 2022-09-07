var x = 'global';

function foo(){
    var x = 'function scope';
    console.log(x);
}

foo();
console.log(x);