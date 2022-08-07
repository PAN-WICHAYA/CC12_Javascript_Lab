let name = 'John';

function sayHi(input) {
  console.log(name); // ***
  name = input;
}
sayHi(); //เข้่าไปหา global ที่ชื่อ name
console.log(name); //name ใน global ถูก update ด้วย name = input ทำให้ name เป็น undefined
