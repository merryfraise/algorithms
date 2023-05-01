/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/9498
 * Problem Number: 9498
 * Level: Bronze V
 * Algorithm: 구현
 */

const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

/* pseudocode
   1. A: 90 ~ 100
   2. B: 80 ~ 89
   3. C: 70 ~ 79
   4. D: 60 ~ 69
   5. F: 그 외
*/

switch (true) {
  case input >= 90:
    console.log('A');
    break;
  case input >= 80:
    console.log('B');
    break;
  case input >= 70:
    console.log('C');
    break;
  case input >= 60:
    console.log('D');
    break;
  default:
    console.log('F');
    break;
}
