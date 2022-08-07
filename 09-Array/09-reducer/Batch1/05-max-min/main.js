let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

const findMaxMin = arr.reduce(
  (acc, item) => {
    if (acc[0] >= item) {
      acc[0] = item;
    } else if (acc[1] <= item) {
      acc[1] = item;
    }
    console.log(acc);
    return acc;
  },
  [Number.MAX_VALUE, Number.MIN_VALUE]
);

console.log(findMaxMin);
