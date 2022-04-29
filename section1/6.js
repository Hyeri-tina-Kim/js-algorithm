// 홀수

function solve(arr) {
  let sum = 0,
    min = 0;

  const oddArr = arr.filter((i) => i % 2 > 0);
  oddArr.sort();
  min = oddArr[0];
  oddArr.map((i) => (sum += i));

  console.log(sum);
  console.log(min);
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solve(arr));

/**
 * for문 탐색
 */
function solution(arr){
  let answer=[];
  let sum=0, min=Number.MAX_SAFE_INTEGER;
  for(let x of arr){
      if(x%2===1){
          sum+=x;
          if(x<min) min=x;
      }
  }
  answer.push(sum);
  answer.push(min);     
  return answer;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));