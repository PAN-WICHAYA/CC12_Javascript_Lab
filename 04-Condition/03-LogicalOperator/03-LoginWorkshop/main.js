let user = prompt("What is your login's name?");

if (user === 'codecamp') {
  const password = prompt('What is your password?');
  if (password === '123456') {
    user = 'codecamp';
  } else {
    alert('Wrong password');
    user = 'guest';
  }
} else {
  user = 'guest';
}

alert(`Welcome ${user}`);
