let checkPrime = (num) => {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

let numPrime = prompt('Enter number');
alert(checkPrime(numPrime));
