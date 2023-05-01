/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/14681
 * Problem Number: 14681
 * Level: Bronze V
 * Algorithm: 구현 / 기하학
 */

const [x, y] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

/* pseudocode
   1. x > 0, y > 0 : 1
   2. x < 0, y > 0 : 2
   3. x < 0, y < 0 : 3
   4. x > 0, y < 0 : 4
*/

y > 0
  ? x > 0
    ? console.log(1)
    : console.log(2)
  : x < 0
  ? console.log(3)
  : console.log(4);

// 답은 맞았는데 런타임 에러 발생 '/dev/stdin'을 0으로 바꾸면 해결..🤔
