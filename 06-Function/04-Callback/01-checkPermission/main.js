const checkPermission = (role, granted, denied) => {
  if (role === 'ADMIN') {
    granted();
  } else {
    denied();
  }
};

const alertOK = () => alert('ACCESS GRANTED');
const alertNotOK = () => alert('ACCESS DENIED');

let userRole = prompt('Enter role');

checkPermission(userRole, alertOK, alertNotOK);
