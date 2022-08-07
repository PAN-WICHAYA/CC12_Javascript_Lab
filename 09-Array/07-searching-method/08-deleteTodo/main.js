const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' },
];

function deleteTask(id) {
  tasks.filter(function (item, index) {
    if (item.id === id) {
      tasks.splice(index, 1);
    }
  });
  console.log(tasks);
  return tasks;
}

deleteTask(2);
