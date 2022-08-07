// check leap year
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

const calAge = (birthYear) => {
  let dayFromBirth = 0;
  let currentYear = 2020;
  for (let i = birthYear; i <= currentYear; i++) {
    let isLeap = checkLeapYear(i);
    if (isLeap) {
      dayFromBirth += 366;
    } else {
      dayFromBirth += 365;
    }
  }
  return dayFromBirth;
};

let year = prompt("Enter your birth's year");
alert(calAge(year));
