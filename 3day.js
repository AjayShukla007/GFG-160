function reverse(arr) {
  if(arr.length < 2) return arr;
  // let start = 0;
  let end = arr.length - 1;

  for (let i = 0; i < end; i++) {
    [arr[i], arr[end]] = [arr[end], arr[i]]
    // start++
    end--
  }
  return arr
}

const arr = [1, 4, 3, 2, 6, 5]
// accepted
console.log(reverse(arr));
