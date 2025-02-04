// function solution(brown, yellow){
//    var answer = [];
   
//    const measures = [];
   
//    for(let i = 1; i <= brown + yellow; i++){
//       if((brown + yellow) % i === 0){
//          measures.push(i);
//       }
//    }
   
//    const middle = Math.floor(measures.length / 2);
   
//    if(measures.length % 2 !== 0){
//       answer.push(measures[middle])
//       answer.push(measures[middle])
//    }else{
//       answer.push(measures[middle]);
//       answer.push(measures[middle - 1]);
//    }
   
//    return answer;
// }

function solution(brown, yellow) {
   let answer = [];
   for (let y = 3; y <= (brown + yellow) / y; y++) {
     let x = Math.floor((brown + yellow) / y);
     if ((x - 2) * (y - 2) === yellow) {
       answer.push(x);
       answer.push(y);
       break;
     }
   }
   return answer;
 }

console.log(solution(10, 2))