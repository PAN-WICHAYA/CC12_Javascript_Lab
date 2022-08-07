let myFunc = function (a, b, c, d) {
  return a + b + c + d;
};

let x = myFunc(1, 2, 3, 4);
console.log(`X : ${x}`);

let myArrowFunc = (a, b, c, d) => a + b + c + d;
let y = myArrowFunc(4, 3, 2, 1);
console.log(`Y : ${y}`);

let inCreaseByFive = (num) => num + 5;
console.log(inCreaseByFive(3));

// ถ้าเป็น Multiline function bode ต้องมี return !!! //
let calcInterest = (balance, rate) => {
  let interest = (balance * rate) / 100;
  return interest;
};

console.log(calcInterest(1000, 28));
