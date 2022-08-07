let a = undefined;
let b = 2;
let c = a++;

let d = String(a);
let e = String(b);
let f = String(c);

console.log(d); //Nan เพราะ undefined มีค่าเป็น Nan
console.log(e); // "2"
console.log(f); // Nan บวกอะไร ก็จะได้ Nan
