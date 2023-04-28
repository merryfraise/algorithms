/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/10430
 * Problem Number: 10430
 * Level: Bronze V
 * Algorithm: 수학 / 구현 / 사칙연산
 */

const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");

/* pseudocode
   1. 세 값을 Number로 형변환하여
   2. (A+B)%C
   3. ((A%C) + (B%C))%C
   4. (A×B)%C
   5. ((A%C) × (B%C))%C를 출력한다.
*/

console.log((Number(A) + Number(B)) % Number(C));
console.log(((Number(A) % Number(C)) + (Number(B) % Number(C))) % Number(C));
console.log((Number(A) * Number(B)) % Number(C));
console.log(((Number(A) % Number(C)) * (Number(B) % Number(C))) % Number(C));
