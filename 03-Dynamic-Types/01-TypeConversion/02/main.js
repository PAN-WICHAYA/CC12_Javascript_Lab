let a = undefined;
let b = null;
let c = b + '4 2';
let d = Number(a);
let e = Number(b);
let f = Number(c);

console.log(d); //Nan เพราะ undefined มีค่าเป็น Nan
console.log(e); // "2"
console.log(f); // 4 2 แยกกันมีค่าเป็น Nan
