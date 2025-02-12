function solution(n, left, right){
   let result = [];
   for(let index = left; index <= right; index++){
      let i = Math.floor(index/ n);
      let j = index % n;
      result.push(Math.max(i, j) + 1);
   }
   
   return result;
}

console.log(solution(3,2,5));
console.log(solution(4,7,14));