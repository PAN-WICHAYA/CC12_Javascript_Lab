let valNum1 = Number(prompt('Enter your number'));
let valNum2 = Number(prompt('Enter your number'));

if (
  valNum1 === null ||
  valNum1 === '' ||
  valNum1.trim() === '' ||
  isNaN(valNum1)
) {
  alert('Invalid Number');
}

alert(valNum1 + valNum2);
