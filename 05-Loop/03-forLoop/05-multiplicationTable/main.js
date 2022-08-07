let result = '';
for (let i = 2; i <= 12; i++) {
  for (let j = 1; j <= 12; j++) {
    result += `${i} x ${j} = ${i * j}\n`;
  }
  result += '\n';
}

console.log(result.trim());
