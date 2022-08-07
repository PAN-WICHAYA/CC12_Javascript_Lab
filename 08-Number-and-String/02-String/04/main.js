let sensorStr = (word) => {
  lower_word = word.trim().toLowerCase();
  return (
    lower_word.includes('xxx') ||
    lower_word.includes('porn') ||
    lower_word.includes('sex')
  );
};

alert(sensorStr("i'm sexy"));
alert(sensorStr('Pornapar'));
alert(sensorStr(' XxX mak'));
alert(sensorStr('sEX '));
alert(sensorStr("i'm wichaya"));
