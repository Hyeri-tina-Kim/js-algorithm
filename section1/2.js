// 삼각형 판별하기

function solve(a, b, c) {
  let answer;

  const arr = [a, b, c];
  arr.sort();

  if (arr[0] + arr[1] > arr[2]) {
    answer = "YES"
  } else {
    answer = "NO"
  }

  return answer;
}

console.log(solve(6, 7, 11));

/**
 * if문 연습 문제
 */

function solution(a, b, c){
  let answer="YES", max;
  let tot=a+b+c;
  if(a>b) max=a;
  else max=b;
  if(c>max) max=c;
  if(tot-max<=max) answer="NO"; 
  return answer;
}

console.log(solution(13, 33, 17));
