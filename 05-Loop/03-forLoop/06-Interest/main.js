let balance = 100000;
let interest = 2.5 / 100;

for (let i = 0; i < 10; i++) {
  balance = balance + balance * interest;
}
console.log(balance.toFixed(2));
