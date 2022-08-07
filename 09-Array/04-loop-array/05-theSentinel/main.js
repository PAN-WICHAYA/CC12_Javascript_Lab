let arr = new Array();
let sum = 0;
do {
  inputNum = prompt('Enter number');
  toNum = parseFloat(inputNum);
  console.log(inputNum);
  console.log(toNum);

  if (toNum !== null && !isNaN(toNum)) {
    arr.push(toNum);
  }
} while (toNum !== null && !isNaN(toNum));
arr.forEach((item) => (sum += item));

console.log(sum);
