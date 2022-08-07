let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

const countWord = names.reduce((acc, item) => {
  //เช็คเวลาไม่มีชื่อ key ใน objectจะ return เป็น undefined เราสามารถเช็ค undefined เพื่อ สร้าง key ได้
  // if (acc[item] === undefined) {
  //   acc[item] = 1;
  // } else {
  //   acc[item] += 1;
  // }
  //##########สามารถเขียนอีกรูปแบบได้
  acc[item] = acc[item] ? acc[item] + 1 : 1;
  return acc;
}, {});

console.log(countWord);
