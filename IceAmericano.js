function solution(money){
   let count = Math.floor(money / 5500);
   let change = money% 5500;
   return [count, change];
}

console.log(solution(5500))
console.log(solution(15000))