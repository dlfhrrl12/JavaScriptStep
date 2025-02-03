function removeDup(arr) {
   return arr.filter((value, index, self) => self.indexOf(value) === index);
}

console.log(removeDup([1,2,2,3,4,4,5]));