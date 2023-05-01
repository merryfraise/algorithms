/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/2753
 * Problem Number: 2753
 * Level: Bronze V
 * Algorithm: 수학 / 구현 / 사칙연산
 */

const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

/* pseudocode
   1. 4의 배수이면서 && 100의 배수가 아니거나 || 400의 배수일 때 1을 출력
*/

!(input % 4) && (input % 100 || !(input % 400))
  ? console.log(1)
  : console.log(0);
