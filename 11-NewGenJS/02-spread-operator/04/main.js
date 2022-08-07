function doubleAndReturnArgs(array, ...nums) {
  const numMultiplyTwo = nums.reduce((acc, item) => {
    let mulTwo = item * 2;
    //console.log(mulTwo);
    acc.push(mulTwo);
    return acc;
  }, []);

  return [...array, ...numMultiplyTwo];
}

let a = doubleAndReturnArgs([1, 2, 3], 4, 4);
console.log(a);
// expexted result: [1, 2, 3, 8, 8]
// doubleAndReturnArgs([2], 10, 4);
// // expexted result: [2, 20, 8]
