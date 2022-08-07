const multiply = (...numbers) => {
  return numbers.reduce((acc, item) => acc * item, 1);
};

console.log(multiply(2, 3, 1, 5, 10)); //300
