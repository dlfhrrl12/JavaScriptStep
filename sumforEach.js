function sumForEach(arr) {
   let sum = 0;
   arr.forEach(num => sum += num);
   return sum;
}

console.log(sumForEach([1,2,3,4,5]));