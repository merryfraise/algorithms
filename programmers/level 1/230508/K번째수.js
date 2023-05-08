/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/42748
 * Problem Number: 42748
 * Level: 1
 * Algorithm: 정렬
 */

function solution(array, commands) {
  const sliced = [];

  commands.forEach((el) => {
    sliced.push(array.slice(el[0] - 1, el[1]).sort((a, b) => a - b)[el[2] - 1]);
  });

  return sliced;
}
