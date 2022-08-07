//ให้ใช้ Array destructuring โดยให้ a, b, c, d, e และ f มีค่า 1, 2, 3, 4, 5, และ 6 ตามลำดับ

let arr = [1, [2, [[[3, 4], 5], 6]]];
const [a, arr1] = arr;
const [b, arr2] = arr1;
const [arr3, f] = arr2;
const [arr4, e] = arr3;
const [c, d] = arr4;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
