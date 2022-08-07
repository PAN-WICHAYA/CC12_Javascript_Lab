const calMatchResult = (result) => {
  let matchPoint = 0;
  if (result === 'win') {
    return (matchPoint += 3);
  } else if (result === 'draw') {
    return (matchPoint += 1);
  } else if (result === 'lose') {
    return matchPoint;
  }
};

let matchResult = prompt('Enter match result');

alert(calMatchResult(matchResult));
