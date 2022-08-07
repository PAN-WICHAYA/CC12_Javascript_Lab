let result = '';

for (let i = 0; i < 8; i++) {
  for (let j = 0; j <= i; j++) {
    result += `${j + 1} `;
  }
  result += '\n';
}
console.log(result.trim());
