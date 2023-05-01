/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/1330
 * Problem Number: 1330
 * Level: Bronze V
 * Algorithm: 구현
 */

const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

/* pseudocode
   1. A가 B보다 크면 >를
   2. A가 B보다 작으면 <를
   3. A와 B가 같으면 ==를 출력한다.
*/

A > B
  ? console.log('>')
  : A === B
  ? console.log('==')
  : console.log('<');
