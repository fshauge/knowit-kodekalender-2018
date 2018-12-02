function run(input) {
  const lines = input.split('\n');

  // (x1,y1);(x2,y2)
  const pattern = /\((\d+),(\d+)\);\((\d+),(\d+)\)/;
  const slopes = {};

  for (const line of lines) {
    const match = line.match(pattern);

    if (!match) {
      continue;
    }

    // Destructure the captures and calculate the slope of the line
    const [, x1, y1, x2, y2] = match;
    const slope = (y2 - y1) / (x2 - x1);

    if (slope in slopes) {
      slopes[slope]++;
    } else {
      slopes[slope] = 1;
    }
  }

  // Find the largest count
  const answer = Object
    .values(slopes)
    .reduce((a, b) => Math.max(a, b), 0);

  return answer;
}

const url = 'https://s3-eu-west-1.amazonaws.com/knowit-julekalender-2018/input-rain.txt';

module.exports = { run, url };
