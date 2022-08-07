const checkEmptyObj = (obj) => {
  console.log(Object.keys(obj));
  return !Object.keys(obj)[0];
};

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

console.log(checkEmptyObj({}));
console.log(checkEmptyObj(salaries));
console.log(checkEmptyObj({ t: 1 }));
