// 연필 개수

function solve(a) {
  let answer;

  const value = parseInt(a / 12);
  const rest = a % 12;

  if (rest > 0) {
    answer = value + 1;
  } else {
    answer = value;
  }

  return answer;
}

console.log(solve(25));

/**
 * Math함수 - ceil(올림)
 * 
 * ceil 올림
 * floor 내림
 * round 반올림
 * sqrt 제곱근
 */

function solution(n){
  let answer;
  answer=Math.ceil(n/12);
  return answer;
}

console.log(solution(178));
