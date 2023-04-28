/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/1000
 * Problem Number: 1000
 * Level: Bronze V
 * Algorithm: 수학 / 구현 / 사칙연산
 */

const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");

/* pseudocode
   1. 두 값을 Number로 형변환하여 더한다.
*/

console.log(Number(A) + Number(B));
