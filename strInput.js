// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();

// console.log(input);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(line); // 입력받은 문자열을 출력
  rl.close(); // 입력 종료
});


/**
 *    Code  설명
 * const readline = require("readline"); => 모듈 가져오기 Node.js에서 일겨을 처리하는 기능 제공
 * readline.creeateInterface()  => 입력 및 출력 인터페이스 생성
 * rl.on("line", callback) => 사용자가 한 줄 입력하면 실행
 * cnosole.log(line) => 입력된 문자 출력
 * rl.close() => 입력을 종료하고 프로그램을 끝냄    
 */