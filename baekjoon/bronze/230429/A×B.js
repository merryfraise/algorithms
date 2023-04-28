/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/10998
 * Problem Number: 10998
 * Level: Bronze V
 * Algorithm: 수학 / 구현 / 사칙연산
 */

const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");

/* pseudocode
   1. 두 값을 Number로 형변환하여 곱한다.
*/

console.log(Number(A) * Number(B));
