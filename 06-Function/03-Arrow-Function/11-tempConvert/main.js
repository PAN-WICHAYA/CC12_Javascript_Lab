const tempConvert = (temp) => ((temp - 32) * 5) / 9;

let tempInput = prompt('Enter temp');
alert(tempConvert(tempInput));
