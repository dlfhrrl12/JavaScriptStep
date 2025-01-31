

// function solution(s){
//    const numbers = s.split(" ").map(Number);
   
//    const min = Math.min(...numbers);
//    const max = Math.max(...numbers);
   
//    let answer = `${max} ${min}`;
   
//    return answer;
// }


function solution(s) {
   let arr = s.split(" ").sort((a, b) => a - b);
   
   return [arr[0], arr[arr.length - 1]].join(" ");
}

console.log(solution("1 2 3 4"));     // "1 4"
console.log(solution("-1 -2 -3 -4")); // "-4 -1"
console.log(solution("10 20 30 40")); // "10 40"