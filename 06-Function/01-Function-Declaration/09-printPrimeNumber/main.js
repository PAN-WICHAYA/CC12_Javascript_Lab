function checkPrime(num) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

console.log(checkPrime(7));
console.log(checkPrime(2));

function printPrime(num) {
  for (let i = 2; i <= num; i++) {
    let isPrime = checkPrime(i);
    if (isPrime) {
      console.log(i);
    }
  }
}

printPrime(30);
