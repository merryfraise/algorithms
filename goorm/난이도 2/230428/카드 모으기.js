/**
 * Goorm
 * https://level.goorm.io
 * Problem Number: 175909
 * Level: 2
 * Algorithm: 해시
 */

const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let lineN = 0;
  let info = [];
  const cards = new Set();
  let count = 0;

  for await (const line of rl) {
    if (lineN === 0) {
      info = line.split(' ');
    } else {
      if (cards.size < info[0]) {
        cards.add(line);
        count++;
      } else rl.close();
    }
    lineN++;
    if (lineN === info[1] + 1) {
      rl.close();
    }
  }

  cards.size < info[0] ? console.log(-1) : console.log(count);

  process.exit();
})();
