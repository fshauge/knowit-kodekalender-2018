// Extracted relevant parts from the quadratic formula
// https://en.wikipedia.org/wiki/Quadratic_formula
function isGoldenYear(year) {
  return Number.isInteger(Math.sqrt(1 + 4 * year));
}

function run(input) {
  const years = input
    .split('\n')
    .map(value => value.split('f.')[1])
    .map(Number)
    .reduce((count, year) => isGoldenYear(year) ? count + 1 : count, 0);

  return years;
}

const url = 'https://s3-eu-west-1.amazonaws.com/knowit-julekalender-2018/input-gullbursdag.txt';

module.exports = { run, url };
