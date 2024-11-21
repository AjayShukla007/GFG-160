// juggling algo
// make the pieces fron the array
// 1, 2, 3, 4, 5
// 3, 4, 5, 1, 2
function jugglingRotateArr(arr, d) {
  if (arr.length < 2 || d < 1) return arr;
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const n = arr.length;
  const k = gcd(n, d);
  for (let i = 0; i < k; i++) {
    let temp = arr[i];
    let j = i;
    while (true) {
      let m = j + d;
      if (m >= n) m = m - n;
      if (m === i) break;
      arr[j] = arr[m];
      j = m;
    }
    arr[j] = temp;
  }
  return arr;
}
const arr = [1, 2, 3, 4, 5]; //output : [3, 4, 5, 1, 2]
let d = 2;

// console.log(jugglingRotateArr(arr, d));

// reccomanded: reversal algo
const reverse = (arr, start, end) => {
  while (start < end) {
    // in order in sublit in gfg we need to add the swapping intereation in [] in both sides 
    // arr[start], arr[end] = arr[end], arr[start];
    // start += 1;
    // end -= 1;

    // this will optimize the code runtime
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start += 1;
    end -= 1;
  }
};

function rotateArr(arr, d) {
  const n = arr.length
  // d %= n // this for right to left
  d = n - (d % n); //left to right
console.log(d);

  reverse(arr, 0, d-1)
  reverse(arr, d, n-1)
  reverse(arr, 0, n-1)
  return arr
}


// console.log(rotateArr(arr, d));
console.log(rotateArr([1,2,3,4,5,6,7], 3)); // expected: [5,6,7,1,2,3,4]