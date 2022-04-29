// forEach, map, filter, reduce 메서드 작동원리
// 넷 다 고차함수 : 함수를 매개변수(콜백함수)로 받는 함수

const a = [10, 11, 12, 13, 14, 15];

/**
 * forEach : for문을 간략히
 * map : 새로운 배열을 반환 (항상 원본 배열과 길이가 같음)
 * filter : 새로운 배열을 반환 (조건이 참인 요소만 추가됨, 길이유지X)
 * reduce : 배열 반환이 아니라 어떤 최종 값을 반환
 */

function reduce(predicate, val) {
  let result = val;
  for (let i = 0; i < a.length; i++) {
    result = predicate(result, a[i]);
  }
  return result;
}

a.reduce((acc, v) => {
  return acc + v;
}, 0);
