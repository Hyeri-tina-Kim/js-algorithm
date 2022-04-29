// 최솟값 구하기

function solve(a, b, c, d, e, f, g) {
  let answer;

  const arr = [a, b, c, d, e, f, g]
  arr.sort()
  answer = arr[0]

  return answer;
}

console.log(solve(5, 7, 1, 3, 2, 9, 11));

/**
 * Number.MAX_SAFE_INTEGER : 안정적인 큰 정수
 */
function solution(arr){         
  let answer, min=Number.MAX_SAFE_INTEGER;
  for(let i=1; i<arr.length; i++){
      if(arr[i]<min) min=arr[i];
  }
  answer=min;
  return answer;

}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

/**
 * 내장함수로 최솟값, 최댓값 구하기
 * ... (전개연산자, spreadOperator)
 */
function solution2(arr){         
  let answer = Math.min(...arr)
  // let answer = Math.min.apply(null, arr)
  console.log(Math.max(...arr));
  return answer;

}

let arr2=[5, 7, 1, 3, 2, 9, 11];
console.log(solution2(arr2));