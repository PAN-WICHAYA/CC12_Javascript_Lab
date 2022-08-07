let arr = ['I', 'study', 'JavaScript'];
let arr2 = arr.splice(1, 1); // from index 1 remove 1 element

console.log(arr); // ["I", "JavaScript"]
console.log(arr2); // ["study"]

let arr3 = ['I', 'study', 'JavaScript', 'right', 'now'];
// remove 3 first elements and replace them with another
arr3.splice(0, 3, "Let's", 'dance');
console.log(arr3); // now ["Let's", "dance", "right", "now"]

//##############INSERT ONLY
let arr4 = ['I', 'study', 'JavaScript'];
// from index 2
// delete 0
// then insert "complex" and "language"
arr4.splice(2, 0, 'complex', 'language');
console.log(arr4); // "I", "study", "complex", "language", "JavaScript"
