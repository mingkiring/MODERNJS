var foo = function (){
    console.dir(this);
};

foo();

var obj = {foo:foo};
obj.foo();

var instance = new foo();

var bar = {name:'bar'};
foo.call(bar);
foo.apply(bar);
foo.bind(bar)();