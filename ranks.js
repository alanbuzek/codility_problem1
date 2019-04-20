function solution(ranks) {
  const rankCounts = {};
  let solution = 0;

  ranks.forEach(rank => {
    if (rankCounts[rank]) {
      rankCounts[rank] += 1;
    } else {
      rankCounts[rank] = 1;
    }
  });

  console.log(JSON.stringify(ranks));

  for (let rank in rankCounts) {
    const rankToReport = rank + 1;
    console.log(`rank to report is ${rankToReport}`);
    if (ranks.includes(parseInt(rank) + 1)) {
      console.log('got here ' + rankCounts[rank]);
      solution += rankCounts[rank];
    }
  }
  console.log(solution);
  return solution;
}
