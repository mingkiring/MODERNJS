var string='HelloWorld';
var count =0 ;

for(var i =0;i<string.length;i++){
    if(string[i]!= 'l') continue;
    count++;
}
console.log(count);
console.log(1+'2');
console.log(1*'2');
console.log('1+1=${1+1}');