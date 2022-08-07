const factorial = (num) => {
  let result = 1;
  for (let i = num; i > 0; i--) {
    console.log(i);
    result *= i;
  }
  return result;
};

let input = prompt('Enter number');
alert(factorial(input));
