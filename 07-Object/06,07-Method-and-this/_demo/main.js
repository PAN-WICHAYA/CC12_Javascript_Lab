// Function Declaration
// เมื่อเรียกใช้ func this จะอยู่ใน global
function a() {
  console.log('##', this);
}
a(); // this === window object
window.a(); // this === window object

// Function Expression เป็นการสร้าง func แล้วเก็บไว้ในตัวแปร

let b = function () {
  console.log('###', this);
};

b(); // this === window object
// window.b(); // window.b is not a function อันนี้เกิดจากความต่างของการสร้าง function ######สามารถแก้ได้ โดยการประกาศเป็น var แทน let###########

// Arrow Function
let c = () => console.log(this);
c(); // this === window object
// window.c(); //  window.c is not a function ########### สามารถแก้ได้ โดยการประกาศเป็น var แทน let #################

//####### this in method #########

let d = {
  name: 'codecamp',
  age: 12,
  increase: function () {
    console.log('IN METHOD INCREASE', this);
    // this.age += 1;
  },
  decrease: function () {
    console.log('IN METHOD DECREASE', this);
    // this.age -= 1;
  },
};
d.increase();
// console.log(d.age)  // 13
// d.decrease()
// console.log(d.age)  // 12

var firstName = 'John';
let sayHi = () => console.log(this.firstName);

// function sayHi() {
//   return console.log(this.firstName);
// }

let user = {
  firstName: 'Ilya',
  sayHi: sayHi,
};

sayHi(); // John
user.sayHi(); // John
sayHi.call(user);
