function solution(arr){
   return arr.reduce((acc, cur) => lcm(acc, cur));
}

function gcd(a, b){
   return b === 0 ? a: gcd(b, a % b);
}

function lcm(a, b){
   return (a * b)/ gcd(a, b);
}

console.log(solution([2,6,8,14]))
console.log(solution([1,2,3]))