// https://en.wikipedia.org/wiki/Quadratic_formula
//
// a = 1
// b = -1
// c = -year
function solve(year) {
  return (1 + Math.sqrt(1 - 4 * -year)) / 2;
}

function run(input) {
  const pattern = /.+f.(\d+)/;

  const years = input
    .split('\n')
    .filter(value => value)
    .map(value => parseInt(value.match(pattern)[1]))
    .reduce((count, year) => count + (Number.isInteger(solve(year)) ? 1 : 0), 0);

  return years;
}

const url = 'https://s3-eu-west-1.amazonaws.com/knowit-julekalender-2018/input-gullbursdag.txt';

module.exports = { run, url };
