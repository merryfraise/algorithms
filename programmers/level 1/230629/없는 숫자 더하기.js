/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/86051
 * Problem Number: 86051
 * Level: 1
 * Algorithm: 월간 코드 챌린지 시즌3
 */

/* pseudocode
   1. 0부터 9까지의 합인 45에서 존재하는 숫자들을 뺀다.
*/

function solution(numbers) {
  return numbers.reduce((acc, cur) => (acc -= cur), 45);
}
