// 10부제

function solve(day, arr) {
  let answer = 0;

  arr.map((i) => {
    if(i.toString().endsWith(day)) answer += 1
  })

  return answer;
}

const arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solve(3, arr));

/**
 * 어떤 수를 10으로 나누면 나머지는 1의자리 숫자임을 기억하라!
 */
function solution(day, arr){
  let answer=0;
  for(let x of arr){
      if(x%10==day) answer++;
  }
  
  return answer;
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));