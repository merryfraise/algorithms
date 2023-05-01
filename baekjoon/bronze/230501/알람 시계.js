/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/2884
 * Problem Number: 2884
 * Level: Bronze III
 * Algorithm: 수학 / 사칙연산
 */

let [H, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

/* pseudocode
   1. 45를 뺐을 때 분이 0보다 작은 경우 분에 60을 더해준다
   2. 45를 뺐을 때 분이 0보다 작은 경우 시에 1을 빼준다
   3. 45를 뺐을 때 시가 0보다 작은 경우 시에 24를 더해준다
*/

if (M < 45) {
  M += 15;
  H -= 1;
  if (H < 0) H += 24;
} else M -= 45;

console.log(`${H} ${M}`);

// H와 M이 변경되는 값이기 때문에 const가 아니라 let으로 선언해줬어야 함
// else 경우를 상정하지 않아 틀린 답안으로 뜸
