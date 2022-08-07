// print 4 times
let result1 = '';
for (let i = 0; i < 4; i++) {
  result1 += '* ';
  console.log(result1.trim());
}

// print 1 times
let result02 = '';
for (let i = 0; i < 4; i++) {
  for (let j = 0; j <= i; j++) {
    result02 += '* ';
  }
  result02 += '\n';
}
console.log(result02.trim());
