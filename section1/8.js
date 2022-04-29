// 일곱난쟁이

// 🥺
function solve(arr) {
  let answer;

  // 목표 : 7개 합이 100이 되는 조합 구하기


  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13]
console.log(solve(arr));

/**
 * 
 */

function solution(arr){
  let answer=arr; // 얕은복사(주소공유)
  let sum=answer.reduce((a, b)=>a+b, 0); // 9명 전체sum
  for(let i=0; i<8; i++){
      for(let j=i+1; j<9; j++){
          if((sum-(answer[i]+answer[j]))==100){ // 전체sum에서 2명씩 빼보면서 100이 되는 케이스를 찾는다
              // j먼저 지우고 i지운다.
              // i를 먼저 지우는 경우, i가 삭제됨으로 인해 j의 index가 달라지기 때문
              answer.splice(j, 1);
              answer.splice(i, 1);
          }
      }
  }
  return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));