function solution(array){
   let obj = {};
   for(let item of array){
      obj.hasOwnProperty(item) ? obj[item] += 1 : obj[item] = 1;
   }
   let arr = Object.entries(obj);
   
   arr.sort((a, b) => b[1] - a[1]);
   if(arr.length >= 2){
      let first = arr[0][1];
      let second = arr[1][1];
      if(first == second){
         return -1;
      }else{
         return Number(arr[0][0]);
      }
   }else{
      return Number(arr[0][0]);
   }
}

console.log(solution([1,2,3,3,3,4]))
console.log(solution([1,1,2,2]))