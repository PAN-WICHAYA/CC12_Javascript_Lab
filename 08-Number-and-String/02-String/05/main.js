let truncater = (str, len) => {
  if (str.length >= len) {
    let modStr = str.slice(0, len - 1);
    return (modStr += '...');
  } else {
    return str;
  }
};

let msg = 'Hello, My name is Wichaya. I am learing codecamp12';
alert(truncater(msg, 20));

console.log(truncater("What I'd like to tell on this topic is:", 20)); // What I'd like to te…
alert(truncater('Hi everyone!', 20));
