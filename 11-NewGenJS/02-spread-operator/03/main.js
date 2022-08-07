const genName = (name, surname, ...hobbies) => {
  return [name, surname, ...hobbies, hobbies.length];
};

console.log(
  genName('Wichaya', 'Charuchinda', 'Tennis', 'Football', 'Ski', 'Scuba')
);
