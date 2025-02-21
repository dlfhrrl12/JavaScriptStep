/*
   문제 설명
H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

제한사항
과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
논문별 인용 횟수는 0회 이상 10,000회 이하입니다.
   */

function solution(txts){
   const len = txts.length;
   let answer = 0;
   for(let i=1; i<=len; i++){
      let cnt = 0;
      for(let j=0; j<len; j++){ // 두 번째 반복문
         if(txts[j] >= i){ // 현재 논문의 인용 횟수가 i 이상인지 확인
            cnt++; // i 이상인 논문의 수를 증가
         }
      }
      console.log(`i: ${i}, cnt: ${cnt}`); // 현재 i와 cnt 값을 출력
      if(cnt >= i){
         answer = i;
         console.log(`answer updated to: ${answer}`); // answer 값이 업데이트될 때 출력
      }
   }
   return answer; // H-Index 값을 반환하도록 수정
}

console.log(solution([3, 0, 6, 1, 5])) // 3