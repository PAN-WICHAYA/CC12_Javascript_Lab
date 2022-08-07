let ucFirst = (str) => {
  let trimed_str = str.trim();
  let firstChar = trimed_str.slice(0, 1);
  let leftString = trimed_str.slice(1);
  return firstChar.toUpperCase() + leftString;
};

alert(ucFirst('wichaya'));
alert(ucFirst(' wichaya'));
alert(ucFirst('wICHAYA'));
