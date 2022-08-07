const index3Square = (array1) => {
  let newArr = [...array1];
  if (newArr.length >= 4) {
    let square = newArr[3] ** 2;
    newArr[3] = square;
  }
  return newArr;
};
const arr2 = [1, 2, 3];
const arr1 = [1, 2, 3, 4, 5, 6];
console.log(index3Square(arr1));
console.log(index3Square(arr2));
