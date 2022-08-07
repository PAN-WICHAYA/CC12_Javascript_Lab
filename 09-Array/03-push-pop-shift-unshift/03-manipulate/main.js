let animals = new Array('Dog', 'Cat', 'Rat');

console.log(animals);
animals.push('Fish');
animals.unshift('Horse');
animals.push('Giraffe', 'Snake');

console.log(animals);

animals.shift('Horse');
animals.pop();
animals.shift('Dog');

console.log(animals);
