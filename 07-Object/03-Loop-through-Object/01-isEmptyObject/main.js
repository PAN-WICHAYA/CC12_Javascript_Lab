f; // Input : object
// Output : true if object is empty and fasle if object is atleast 1 key

function isEmptyObj(obj) {
  // เข้า for loop เมื่อ obj มี 1 key ขึ้นไป
  for (let key in obj) {
    return false;
  }
  return true;
}

const user1 = { name: 'CC12' };
const user2 = { name: 'CC12', cohort: 12, year: 2022 };
const user3 = {};

console.log(isEmptyObj(user1)); //false
console.log(isEmptyObj(user2)); // false
console.log(isEmptyObj(user3)); //true
console.log(isEmptyObj({ name: 'Alex', age: 34 })); // การใส่ parameter แบบ on the fly
console.log(isEmptyObj({})); //true
