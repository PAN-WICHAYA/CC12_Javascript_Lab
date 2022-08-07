let a = undefined;
let b = ' ';
let c = !b;

let d = Boolean(a);
let e = Boolean(b);
let f = Boolean(c);

console.log(d); // false
console.log(e); // whitespace string มีค่าเป็น true
console.log(f); // not true เป็น false
