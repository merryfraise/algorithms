/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * Problem Number: 42576
 * Level: 1
 * Algorithm: 해시
 */

function solution(participant, completion) {
  const part = {};
  const comp = {};

  for (const name of participant) {
    part[name] = (part[name] || 0) + 1;
  }

  for (const name of completion) {
    comp[name] = (comp[name] || 0) + 1;
  }

  for (let name in part) {
    if (part[name] !== comp[name]) return name;
  }
}
