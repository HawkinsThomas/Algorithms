function mergeSort(arr) {
  if (arr.length === 1) return arr;

  return merge(mergeSort(arr.slice(0, Math.floor(arr.length/2))), mergeSort(arr.slice(Math.floor(arr.length/2))));
}

function merge(arr1, arr2) {
  let outputArr = [];
  while(arr1.length !==0 && arr2.length !==0){
    if (arr1[0] <= arr2[0]){
      outputArr.push(arr1.shift());
    } else {
      outputArr.push(arr2.shift());
    }
  }
  if(arr1.length){
    outputArr = outputArr.concat(arr1);
  } else outputArr = outputArr.concat(arr2);
  return outputArr
}

//const arr = [2, 6, 1, 4, 5, 3];
const arr = [1]
console.log(mergeSort(arr));