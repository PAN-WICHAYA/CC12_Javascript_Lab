const mergeObjects = (...objs) => {
  objs.reverse();

  return objs.reduce((acc, item) => {
    acc = {
      ...acc,
      ...item,
    };
    return acc;
  }, {});
};

////### Test function
let obj1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  ssn: '123-456-2356',
};

let obj2 = {
  jobTitle: 'JavaScript Developer',
  location: 'USA',
};

console.log(mergeObjects(obj1, obj2));

//###########TEST2
let obj3 = {
  jobTitle: 'JavaScript Developer',
  country: 'USA',
};

let obj4 = {
  city: 'London',
  country: 'England',
};

console.log(mergeObjects(obj3, obj4));
