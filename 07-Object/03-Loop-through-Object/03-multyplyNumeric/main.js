let multiplyNumber = function (obj, num) {
  const result = {};
  for (key in obj) {
    if (typeof obj[key] === 'number') {
      result[key] = obj[key] * num;
    } else {
      result[key] = obj[key];
    }
    // let vObj = obj[key];
    // if (vObj === null || vObj === '' || vObj.trim() === '' || isNaN(vObj)) {
    //   console.log('This is Non a number');
    // } else {
    //   obj[key] *= num;
    // }
  }
  return result;
};

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

console.log(multiplyNumber(menu, 3));
console.log(menu);
