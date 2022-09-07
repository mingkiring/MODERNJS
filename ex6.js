const user1 = {
    name: 'Min',
    address:{
        city:'Seoul'
    }
};

const user2 = Object.assign({},user1);
console.log(user1);
console.log(user2);
console.log(user1==user2);

user1.name='Kim';
console.log(user1.name);
console.log(user2.name);

console.log(user1.address==user2.address);

user1.address.city='Busan';
console.log(user1.address.city);
console.log(user2.address.city);