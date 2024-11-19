function main(arr) {
  if (arr.length < 2) return arr;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++
    }
  }
  return arr
}
function mySol1(arr){
  
}
const arr = [1, 2, 0, 4, 3, 0, 5, 0];
main(arr);
console.log(arr.join(" "));
console.log(main([1, 2, 0, 4, 3, 0, 5, 0]).join(" "));
