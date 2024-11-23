// O(n) tc and O(n) sc
function findMajorityII(arr) {
  if (arr.length < 4) return []
 let mpp = {}
 let ls = []
const n = arr.length
const mini = parseInt(n/3)+1

for(let i = 0; i<n; i++){
  mpp[arr[i]] = (mpp[arr[i]] || 0) + 1
  if(mpp[arr[i]] === mini){
    ls.push(arr[i])
  }
}
return ls
}
console.log("test cases")
console.log(findMajorityII([1,1,1,3,3,2,2,2]))
console.log(findMajorityII([3,2,3]))
console.log(findMajorityII([1,1,1,2,2,2,3,3,3]))
console.log(findMajorityII([22,35,62,84,55,75,62,62]))