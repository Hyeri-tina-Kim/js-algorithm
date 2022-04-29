// 문자 찾기

function solve(str, alphabet) {
  let answer = 0;

  for (let x of str) {
    if (x === alphabet) answer += 1;
  }

  return answer;
}

console.log(solve("COMPUTERPROGRAMMING", "R"));

/**
 * 문자 찾기
 */
function solution(s, t){
  let answer=0;
  for(let x of s){
      if(x===t) answer++;
  }
  return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));

// 내장함수 split 사용해보기
function solution2(s, t){
  let answer=s.split(t).length;
  return answer-1;
}

let str="COMPUTERPROGRAMMING";
console.log(solution2(str, 'R'));