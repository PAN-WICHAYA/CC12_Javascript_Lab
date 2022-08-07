const employees = {
  john: {
    salary: 1000,
    address: { district: 'Ratchathewi', province: 'Bangkok' },
  },
  peter: {
    salary: 1500,
    address: { district: 'Pathumwan', province: 'Bangkok' },
  },
  mike: {
    salary: 800,
    address: { district: 'Pakkret', province: 'Nonthaburi' },
  },
  sarah: {
    salary: 2200,
    address: { district: 'Sriraja', province: 'Chonburi' },
  },
};
// alert(employees['mike']['address']['province']);
// alert(employees['john']['salary']);

let inputName = prompt('Enter name');

if (inputName.toLowerCase() in employees) {
  let key = inputName.toLowerCase();
  alert(
    `Name: ${key}, salary: ${employees[key]['salary']}, address: ${employees[key]['address']['district']}, ${employees[key]['address']['province']}`
  );
  console.log(
    `Name: ${key}, salary: ${employees[key]['salary']}, address: ${employees[key]['address']['district']}, ${employees[key]['address']['province']}`
  );
} else {
  alert('Not Found');
  console.log('Not Found');
}
