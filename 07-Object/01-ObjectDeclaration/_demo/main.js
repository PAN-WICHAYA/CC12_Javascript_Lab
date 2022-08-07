// Object == Collection of key-Value Pair

// #1 Object Declaration #1
// const myObj = new Object;
// console.log(myObj);

// Object Literal

const person = {
  firstName: 'John', //Key-Value === property
  lastName: 'Doe',
  age: 27,
  isAdmin: true,
  child: null,
  address: {
    // เก็บ value เป็น object
    road: 'Sukhumwit',
    province: 'Bangkok',
  },
  sayHi: function () {
    // เก็บ value เป็น Function  , Function ใน object เรียกว่า method
    alert('Hello');
  },
};

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.address.road); //การเข้าถึง object ใน object
console.log(person.address.district); // undefined เมื่อไม่มีข้อมูลใน object นั้นๆ

/////// UPDATE VALUE ใน Object
person.firstName = 'Alex';
person.age = person.age + 1;
person.address.road = 'Thonglor';
console.log(person);
console.log(person.firstName);
console.log(person.address.road); //การเข้าถึง object ใน object
////// DELETE value หรือ key ใน object
delete person.age;
console.log(person);
//////// ADD key-value ใน object
person.salary = 45000;
console.log(person);

///// ACCESS BY SQUARE BLACKET

console.log(person['firstName']); /// ใน Square blacket ในอยู่ใน Quote ""
//console.log(person[firstName]); /// reference error
let a = 'age';
console.log(person[a]); // Computed key !!

//// ADD by using SQUARE BRACKET

person['graduate school'] = 'CodeCamp';
console.log(person);

///// Property Short Hand //////
let username = 'CC12';
let password = '1234';
let role = 'ADMIN';

// const user = {
//   username: username,
//   password: password,
//   role: role,
// };
//สามารถเขียนแบบ short hand ได้ เมื่อใช้ชื่อ key-value เดียวกัน
const user = {
  username,
  password,
  role,
};
console.log(user);
console.log('username' in user); //ให้ค่าเป็น bool เช็คว่ามี key ใน object นั้นๆ ไหม ?

let user2 = {};
// console.log(user2.address.province); // Error
console.log(user2.address ? user2.address.province : undefined); // Fixed#1
console.log(user2.address && user2.address.province); // Fixed#2

let user3 = {};
console.log(user3.address?.province); // Short and clean
