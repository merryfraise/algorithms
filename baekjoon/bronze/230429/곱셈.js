/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/2588
 * Problem Number: 2588
 * Level: Bronze III
 * Algorithm: 수학 / 사칙연산
 */

const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

/* pseudocode
   1. 두 값을 Number로 형변환하여
   2. A와 B의 1의 자리수를 곱한 값
   3. A와 B의 10의 자리수를 곱한 값
   4. A와 B의 100의 자리수를 곱한 값
   5. A와 B를 곱한 값을 출력한다.
*/

console.log(Number(A) * Number(B[2]));
console.log(Number(A) * Number(B[1]));
console.log(Number(A) * Number(B[0]));
console.log(Number(A) * Number(B));
