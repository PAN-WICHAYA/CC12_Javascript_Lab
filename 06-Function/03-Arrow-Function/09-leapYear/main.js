const checkLeapYear = (year) => {
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }
  return year % 4 === 0;

  // else if (year % 4 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
};

let testYear = prompt('Enter year');
alert(checkLeapYear(testYear));
