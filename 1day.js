function main(arr){
	let max = -1, secmax = -1
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      secmax = max
      max = arr[i]
    } else if (arr[i] < max && arr[i] > secmax){
      secmax = arr[i]
    }
  }
  return secmax
}
function mySolv(arr) {
  let max = -1, secmax = -1;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max){
      secmax = max;
      max = arr[i]
    }else if(arr[i] < max && arr[i] > secmax){
      secmax = arr[i]
    }
    
  }
  return secmax
}
console.log(main([12, 35, 1, 10, 34, 1]))
console.log(main([10, 10, 10]))
console.log(mySolv([12, 35, 1, 10, 34, 1]))
console.log(mySolv([10, 10, 10]))