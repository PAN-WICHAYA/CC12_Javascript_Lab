let myGrade = prompt('Enter you grade :');

let msg =
  myGrade >= 80
    ? 'A'
    : myGrade >= 70
    ? 'B'
    : myGrade >= 60
    ? 'C'
    : myGrade >= 50
    ? 'D'
    : 'F';

alert(msg);
