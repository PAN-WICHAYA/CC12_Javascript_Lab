const arr = [2, 3, 5, 7, 11];
let squareArr = function (item, index, array) {
  array[index] = item ** 2;
};

arr.forEach(squareArr);

console.log(arr);
