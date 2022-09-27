var Person = function (arg){
    var name = arg? arg : '';

    this.getName =function(){
        return name;
    };
    this.setName = function(arg){
        name = arg;
    };
    
}
var me = new Person('Lee');
var name = me.getName();    
console.log(name);

