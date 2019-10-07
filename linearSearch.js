// search an array in a linear manner
function linearSearch(ar, val) {
  let index = undefined;
  for (let i = 0; i < ar.length; i += 1) {
    if (ar[i] === val) {
      index = i;
      break;
    }
  }
  return index;
}

console.log((linearSearch([1, 2, 3, 4], 3)));
