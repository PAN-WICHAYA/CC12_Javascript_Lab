function filterRange(arr, a, b) {
  let result = arr.filter((item) => item > a && item < b);
  console.log(result);
  return result;
}

arr = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 19, 20, 40, 5, 7];

filterRange(arr, 2, 7);
