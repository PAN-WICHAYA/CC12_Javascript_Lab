let cloneArr = (arr) => {
  return arr.slice();
};

let arr1 = ['a', 'b', 'c', 'd'];

let arr2 = cloneArr(arr1);

console.log(arr1);
console.log(arr2);
