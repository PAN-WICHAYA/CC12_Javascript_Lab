let sumAllNumber = 0;
let sumEven = 0;
let sumOdd = 0;
let sumSquareDifferent = 0;
for (let i = 0; i <= 100; i++) {
  // หาผลรวมตัวเลขทุกตัว
  sumAllNumber += i;

  // หาผลรวมเฉพาะเลขคู่
  if (i % 2 === 0) {
    sumEven += i;
    // หา sumSquareDifferent
    sumSquareDifferent += i ** 2;
  }
  // หาผลรวมเฉพาะเลขคี่
  if (i % 2 !== 0) {
    sumOdd += i;
  }

  // ลบด้วยเลขที่ หารด้วย 3ลงตัว ยกกำลัง2
  if (i % 3 === 0) {
    sumSquareDifferent -= i ** 2;
  }
}

console.log(sumAllNumber);
console.log(sumEven);
console.log(sumOdd);
console.log(sumSquareDifferent);
