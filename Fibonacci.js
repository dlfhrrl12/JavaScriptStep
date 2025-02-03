function solution(n) {
   let f0 = 0;
   let f1 = 1;
   
   for(let i = 2; i <= n; i++){
      let answer = (f0 + f1) % 1234567;
      f0 = f1;
      f1 = answer;
   }
   
   return f1;
}

console.log(solution(3));
console.log(solution(1500));