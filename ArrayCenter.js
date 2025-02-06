function solution(array){
   array.sort((a, b) => a - b);
   return  array[Math.floor(array.length / 2)]
}

console.log(solution([1,2,7,10,11]))