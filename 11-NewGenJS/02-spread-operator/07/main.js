const cloneObject = (obj) => {
  return { ...obj };
};

obj1 = { t: 1, v: 5 };
obj2 = cloneObject(obj1);

console.log(obj1);
console.log(obj2);

obj1.t = 2;

console.log(obj1);
console.log(obj2);
