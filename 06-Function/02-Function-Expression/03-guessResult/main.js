function magic() {
  return function (x) {
    return x * 42;
  };
}

const answer = magic();
console.log(answer); // log ว่า answer คือ function
console.log(answer(1337)); // **
console.log(magic(11)(10)); // *** magic(123) เป็นการเรียกเพื่อให้ return function(x) ออกมาใช้อีกที (123 เป็น parameter ที่จะใส่หรือไม่ใส่ก็ได้)
