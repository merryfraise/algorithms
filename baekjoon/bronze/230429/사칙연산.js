/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/10869
 * Problem Number: 10869
 * Level: Bronze V
 * Algorithm: 수학 / 구현 / 사칙연산
 */

const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");

/* pseudocode
   1. 두 값을 Number로 형변환하여
   2. 더하고
   3. 빼고
   4. 곱하고
   5. 나누고 (몫)
   6. 나눈다. (나머지)
*/

console.log(Number(A) + Number(B));
console.log(Number(A) - Number(B));
console.log(Number(A) * Number(B));
console.log(Math.floor(Number(A) / Number(B)));
console.log(Number(A) % Number(B));
