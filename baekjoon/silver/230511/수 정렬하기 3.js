/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/10989
 * Problem Number: 10989
 * Level: Bronze I
 * Algorithm: 정렬
 */

const [N, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

/* pseudocode
   1. 문제에 작성된 의사코드대로 quick sort를 정의
   2. 요구하는 것은 K번째에 교환된 숫자를 작은 수부터 출력하는 것
   3. 교환 횟수 카운팅을 위한 변수 생성 (count)
   4. 교환된 숫자를 담기 위한 배열 생성 (result)
   5. count가 K와 동일하다면 배열에 작은 수부터 push (Math.min, Math.max 이용)
   6. 총 교환 횟수가 K보다 작다면 -1 출력 아니라면 result 출력
*/

const count = [];
const result = [];

for (const el of input) {
  count[el] = (count[el] || 0) + 1;
}

for (let i = 0; i < count.length; i++) {
  while (count[i] > 0) {
    result.push(i);
    count[i]--;
  }
}

console.log(result.join('\n'));
