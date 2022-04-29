// 1부터 N까지 합 출력하기

function solve(a) {
  let answer = 0;

  for (let i = 1; i < a + 1; i++) {
    answer += i;
  }

  return answer;
}

console.log(solve(10));

/**
 * for문 누적
 */
function solution(n){
  let answer=0;
  for(let i=1; i<=n; i++){
      answer=answer+i;
  }
  
  return answer;
}

console.log(solution(10));