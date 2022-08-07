let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};
let { yearNeptuneDiscovered, ...discoveryYears } = planetFacts;
console.log(discoveryYears); // {  numPlanets: 8,yearMarsDiscovered: 1659}
