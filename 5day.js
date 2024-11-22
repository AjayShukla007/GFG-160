// rearrange the order in lexicographically
// means 123 is less then 132 so the next permutation is 132 and after it will be 213

function nextPermutation(arr) {
  if (arr.length < 2) return arr;
  const n = arr.length;
  let pivot = -1;
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      pivot = i;
      break;
    }
  }
  if (pivot === -1) {
    arr.reverse();
    return arr;
  }

  for (let i = n - 1; i > pivot; i--) {
    if (arr[i] > arr[pivot]) {
      [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
      break;
    }
  }
  // console.log(pivot);
  let start = pivot + 1,
    end = n - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

console.log(nextPermutation([2, 4, 1, 7, 5, 0]));
console.log(nextPermutation([1, 2, 3, 6, 5, 4]));
