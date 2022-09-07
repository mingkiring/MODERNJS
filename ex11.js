var x = 'global';

function foo(){
    var x = 'local';
    console.log(x); //local

    function bar (){
        console.log(x);//local
    }
    bar();

}
foo();
console.log(x);//global 