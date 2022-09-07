//객체의 방어적 복사 object.
//copy
const obj={a:1};
const copy=Object.assign({},obj);
console.log(copy);
console.log(obj==copy);

//merge
const o1={a:1};
const o2={b:1};
const o3={c:1};

const merge1=Object.assign(o1,o2,o3);

console.log(merge1);
console.log(o1); // 타켓 객체가 변경됨!!!!
console.log(o2);
console.log(o3);

const o4={a:1};
const o5={b:2};
const o6={c:3};

const merge2=Object.assign({},o4,o5,o6);

console.log(merge2);
console.log(o4);