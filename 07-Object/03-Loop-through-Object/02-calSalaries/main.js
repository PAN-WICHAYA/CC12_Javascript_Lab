let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// INPUT : Object
// OUTPUT : sum of salary ===> Number

let calSalaries = function (obj) {
  let sum = 0;
  for (key in obj) {
    sum += obj[key];
  }
  return sum;
};

console.log(calSalaries(salaries));
console.log(calSalaries({}));
