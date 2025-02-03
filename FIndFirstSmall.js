function findFirstSamll(arr, n){
   return arr.find(num => num < n);
}

console.log(findFirstSamll([10,20,30,40], 25));