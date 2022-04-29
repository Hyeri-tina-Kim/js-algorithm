// 세 수 중 최솟값

function solve(a, b, c) {
  let answer;

  if (a < b && a < c) answer = a;
  if (b < a && b < c) answer = b;
  if (c < a && c < b) answer = c;

  return answer;
}

console.log(solve(10, 2, 7));

/**
 * if문 연습 문제
 */

function solution(a, b, c){
  let answer;
  if(a<b) answer=a;
  else answer=b;
  if(c<answer) answer=c; 
  return answer;
}

console.log(solution(2, 5, 1));