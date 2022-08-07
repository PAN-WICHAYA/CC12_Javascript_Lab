let x = +prompt('Enter x value');
let y = +prompt('Enter y value');
let z = +prompt('Enter z value');

if (x >= y && x >= z) {
  if (y > z) {
    alert(`${x}:${y}:${z}`);
  } else {
    alert(`${x}:${z}:${y}`);
  }
} else if (y >= x && y >= z) {
  if (x > z) {
    alert(`${y}:${x}:${z}`);
  } else {
    alert(`${y}:${z}:${x}`);
  }
} else if (z >= x && z >= y) {
  if (x > y) {
    alert(`${z}:${x}:${z}`);
  } else {
    alert(`${z}:${y}:${x}`);
  }
} else {
  alert('this is not a number');
}
