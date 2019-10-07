function insertionSort(ar) {
  for (let i = 1; i < ar.length; i += 1) {
    const key = ar[i];
    let j = i - 1;
    while (j >= 0 && ar[j] < key) {
      ar[j + 1] = ar[j];
      j -= 1;
    }
    ar[j + 1] = key;
  }
}

const nums = [3, 1, 2, 3, 8, 2, 6, 4, 5, 3, 7, 1];

insertionSort(nums);
console.log(nums);