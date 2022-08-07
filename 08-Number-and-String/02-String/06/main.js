let exCurrencyValue = (str, rate) => {
  let toNumcurr = Number(str.slice(1));
  toStrConverted = 'THB' + String((toNumcurr * rate).toFixed(2));
  return toStrConverted;
};

alert(exCurrencyValue('$100', 37));
alert(exCurrencyValue('$-100', -10));
alert(exCurrencyValue('$100', 33.5));
alert(exCurrencyValue('$100.356', 37));
