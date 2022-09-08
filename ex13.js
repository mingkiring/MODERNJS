var obj1 = {
    name:'Min',
    sayName: function(){
        console.log(this.name);
    }
}

var obj2 = {
    name : 'Kim'
}

obj2.sayName = obj1.sayName;

obj1.sayName(); //min
obj2.sayName(); //kim