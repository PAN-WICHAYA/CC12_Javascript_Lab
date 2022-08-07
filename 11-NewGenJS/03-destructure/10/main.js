// - จงเขียนฟังก์ชัน topSalaries(salaries) เพื่อ return ชื่อคนที่มี salary สูงสุด
// - ถ้า salaries เป็น empty object ให้ return null
// - ถ้ามีคนที่ได้ salary มากสุดให้ return ชื่อคนใดคนหนึ่ง

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalaries(salaries) {
  const keyArr = Object.keys(salaries);
  const valueArr = Object.values(salaries);
  if (!keyArr[0]) {
    return null;
  } else {
    let testValue = Number.MIN_VALUE;
    const topSalIndex = valueArr.reduce((acc, item, index) => {
      if (testValue <= item) {
        testValue = item;
        acc = index;
        console.log(acc);
      } else {
        acc = acc;
        console.log(acc);
      }
      return acc;
    }, 0);

    return keyArr[topSalIndex];
  }
}

console.log(topSalaries(salaries));
