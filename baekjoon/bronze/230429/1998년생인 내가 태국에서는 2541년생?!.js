/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/18108
 * Problem Number: 18108
 * Level: Bronze V
 * Algorithm: 수학 / 사칙연산
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");

/* pseudocode
   1. 불기에서 544년을 뺀 값이 서기이다. (근데 문제는 왜 543년 차이인)
*/

console.log(Number(input) - 543);
