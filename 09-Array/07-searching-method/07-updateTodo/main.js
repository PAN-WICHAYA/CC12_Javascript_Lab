const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' },
];
let updateTask = (id, newName) => {
  const newTask = tasks.slice(0); //clone tasks object
  newTask.filter(function (item) {
    if (item.id === id) {
      item.name = newName;
    }
  });
  return newTask;
};

console.log(updateTask(2, 'Travelling'));
