let first = (arr, n) => {
  let newArr = [];
  if (n > 1) {
    newArr = arr.slice(0, n);
  } else {
    newArr = arr.slice(0, 1);
  }
  return newArr;
};

console.log(first([7, 9, 0, -2])); // 7
console.log(first([], 3)); // []
console.log(first([7, 9, 0, -2], 3));
