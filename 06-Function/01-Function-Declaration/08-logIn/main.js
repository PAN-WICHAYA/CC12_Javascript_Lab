const login = (username, password) => {
  if (username === 'admin' && password === 'P@ssw0rd') {
    alert('Login success');
  } else {
    alert('Cannot Login');
  }
};

login('Wichaya', 'HeyHey');
login('admin', 'P@ssw0rd');
