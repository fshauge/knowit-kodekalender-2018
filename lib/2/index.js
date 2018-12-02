function run(input) {
  const lines = input.split('\n');

  // (x1,y1);(x2,y2)
  const pattern = /\((?<x1>\d+),(?<y1>\d+)\);\((?<x2>\d+),(?<y2>\d+)\)/;
  const groups = [];

  for (const line of lines) {
    const match = line.match(pattern);

    if (!match) {
      continue;
    }

    const { x1, y1, x2, y2 } = match.groups;
    const slope = (y2 - y1) / (x2 - x1);

    // Find the matching slope using
    // epsilon float equality checking
    const group = groups.find(group =>
      Math.abs(group.slope - slope) < Number.EPSILON);

    if (group) {
      group.count++;
    } else {
      groups.push({ slope, count: 1 });
    }
  }

  const answer = groups
    .map(group => group.count)
    .reduce((a, b) => Math.max(a, b), 0);

  return answer;
}

const url = 'https://s3-eu-west-1.amazonaws.com/knowit-julekalender-2018/input-rain.txt';

module.exports = { run, url };
