//재귀함수
function fibonacci(n){
    if(n<2) return n;
    return fibonacci(n-1)+fibonacci(n-2);
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));

function factorial(n){
    if(n<2) return 1;
    return factorial(n-1) * n;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));