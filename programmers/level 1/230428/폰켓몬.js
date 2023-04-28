/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/1845
 * Problem Number: 1845
 * Level: 1
 * Algorithm: 해시
 */

function solution(nums) {
  const ponkemon = {};
  let pick = nums.length / 2;

  for (const species of nums) {
    ponkemon[species] = (ponkemon[species] || 0) + 1;
  }

  let count = Object.keys(ponkemon).length;

  return pick < count ? pick : count;
}
