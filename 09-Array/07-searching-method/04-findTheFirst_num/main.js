const nums = [7, 9, -5, -1, 0, 3];

let result = nums.find((item, index, array) => {
  return item < 0;
});

console.log(result);
