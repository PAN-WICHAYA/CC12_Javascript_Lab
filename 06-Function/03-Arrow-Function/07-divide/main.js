const check7 = (num) => {
  if (num % 7 === 0) {
    return true;
  }
  return false;
};

let number = prompt('Enter number');

alert(check7(number));
