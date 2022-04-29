// A를 #으로

// 자바스크립트는 replaceAll함수가 없다.
function solve(str) {
  // return str.replaceall("A", "#");
  const regExp = /A/gi; //g: global, 한개가 아니라 전체에 적용하라는 뜻
  return str.replace(regExp, "#");
}

console.log(solve("BANANA"));

/**
 * 간단한 문자열 탐색문제
 */
function solution(s) {
  let answer = "";
  for (let x of s) {
    // string도 이렇게 탐색할 수 있다!
    if (x === "A") answer += "#";
    else answer += x;
  }
  return answer;
}

let str = "BANANA";
console.log(solution(str));

function solution2(s) {
  let answer = s;
  s = s.replace(/A/, "#");
  return answer;
}

let str = "BANANA";
console.log(solution2(str));
