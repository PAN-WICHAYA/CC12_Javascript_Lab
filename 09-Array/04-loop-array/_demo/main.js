/////######### FOR LOOP ############

let arr = ['Apple', 'Orange', 'Pear'];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//############# FOR IN ################ iterate through index
let arr2 = ['Apple', 'Orange', 'Pear'];

for (let index in arr2) {
  console.log(arr2[index]);
}

//########### FOR OFF ################# iterate via items
let arr3 = ['Apple', 'Orange', 'Pear'];

for (let item of arr3) {
  console.log(item);
}
///######## FOR EACH ##################(
['Bilbo', 'Gandalf', 'Nazgul'].forEach(alert); //function alert จะเรียกค่าใน array['Bilbo', 'Gandalf', 'Nazgul'] แต่ในรูปแบบ (item,index,array )ทำให้ item จะถูกเรียก)

alert('DOG', 'CAT', 'FISH'); //alert จะเรียกเฉพาะ ค่าแรกใน parameter

['Bilbo', 'Gandalf', 'Nazgul'].forEach(console.log);

['Bilbo', 'Gandalf', 'Nazgul'].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
