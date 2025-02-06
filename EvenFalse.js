function solution(n){
   return Array.from({ length: n }, (_, i) => i + 1).filter(num => num % 2 !== 0);
   
}

console.log(solution(10));
console.log(solution(15));