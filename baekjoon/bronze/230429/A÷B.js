/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/1008
 * Problem Number: 1008
 * Level: Bronze V
 * Algorithm: 수학 / 구현 / 사칙연산
 */

const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");

/* pseudocode
   1. 두 값을 Number로 형변환하여 나눈다.
   2. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-9 이하여야 한다는 조건이 있으므로 소수점 9번째 자리까지로 고정하였다.
*/

console.log((Number(A) / Number(B)).toFixed(9));
