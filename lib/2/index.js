// Float equality checking
const areEqual = (a, b) => Math.abs(a - b) < Number.EPSILON;

function run(input) {
  const lines = input.split('\n');

  // (x1,y1);(x2,y2)
  const pattern = /\((\d+),(\d+)\);\((\d+),(\d+)\)/;
  const groups = [];

  for (const line of lines) {
    const match = line.match(pattern);

    if (!match) {
      continue;
    }

    // Destructure the groups and calculate the slope of the line
    const [, x1, y1, x2, y2] = match;
    const slope = (y2 - y1) / (x2 - x1);
    const group = groups.find(group => areEqual(group.slope, slope));

    if (group) {
      group.count++;
    } else {
      groups.push({ slope, count: 1 });
    }
  }

  // Find the largest count
  const answer = groups
    .map(group => group.count)
    .reduce((a, b) => Math.max(a, b), 0);

  return answer;
}

const url = 'https://s3-eu-west-1.amazonaws.com/knowit-julekalender-2018/input-rain.txt';

module.exports = { run, url };
