let randomNum = (min, max) => {
  let random = Math.random() * (max - min);
  return random + min;
};

console.log(randomNum(5, 10));
