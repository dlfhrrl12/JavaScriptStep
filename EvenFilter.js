function EvenFilter(arr) {
   return arr.filter(num => num % 2 === 0);
}

console.log(EvenFilter([1,2,3,4,5]));