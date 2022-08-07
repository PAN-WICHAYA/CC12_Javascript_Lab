const values = [1, 4, 8, 2, 1, 3, 3, 8];

const unique = (arr) => {
  const newSet = new Set(arr);
  const newArr = Array.from(newSet);
  return newArr;
};

console.log(unique(values)); // [1, 4, 8, 2, 3]
