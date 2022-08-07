let str = '31 45 12 67 34 86 23 37 19 41';
const arrNum = str.split(' ');

let sumLower40 = arrNum.reduce((acc, item) => {
  if (item < 40) {
    acc += Number(item);
  }
  return acc;
}, 0);

console.log(sumLower40);
