function solution(numer1, denom1, numer2, denom2){
     // 두 분수의 합을 구하기 위한 분자와 분모 계산
     const numerator = numer1 * denom2 + numer2 * denom1;  // 새로운 분자
     const denominator = denom1 * denom2;  // 새로운 분모
     
     // 최대공약수를 구하는 함수 (유클리드 호제법)
     function gcd(a, b) {
         while (b) {
             let temp = b;
             b = a % b;
             a = temp;
         }
         return a;
     }
     
     // 기약 분수로 만들기 위해 분자와 분모를 최대공약수로 나누기
     const gcdValue = gcd(numerator, denominator);
     
     // 기약 분수로 나눈 후 결과 반환
     return [numerator / gcdValue, denominator / gcdValue];
}

console.log(solution(1,2,3,4))
console.log(solution(9,2,1,3))