//일급 객체
var increase = function(num){
    return ++num;
};
var decrease = function(num){
    return --num;
};

var predicates = {increase, decrease};

function makeCounter(predicate){
    var num=0;

    return function(){
        num = predicate(num);
        return num;
    };
}

var increaser = makeCounter(predicates.increase);
console.log(increaser());
console.log(increaser());
var decreaser = makeCounter(predicates.decrease);
console.log(decreaser());
console.log(decreaser());
console.log(increaser());