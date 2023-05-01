/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/11382
 * Problem Number: 11382
 * Level: Bronze V
 * Algorithm: 수학 / 구현 / 사칙연산
 */

const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

/* pseudocode
   1. 세 값을 더한다.
*/

console.log(A + B + C);
