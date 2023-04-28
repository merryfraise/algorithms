/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/7785
 * Problem Number: 7785
 * Level: Silver V
 * Algorithm: 자료 구조 / 해시를 사용한 집합과 맵
 */

const [N, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

/* Use Object */
const worker = {};

for (const info of input) {
  const [name, status] = info.split(' ');
  worker[name] = status;
}

const name = Object.keys(worker);
const entered = name.filter((key) => worker[key] === 'enter');

entered.sort().reverse();

for (const name of entered) {
  console.log(name);
}

// 시간 초과로 정답 수정

/* Use Set */
const worker = new Set();

for (const info of input) {
  const [name, status] = info.split(' ');
  if (status === 'enter') {
    worker.add(name);
  } else worker.delete(name);
}

const entered = [...worker].sort().reverse();

console.log(entered.join('\n'));
