function* digits(n) {
  while (n > 0) {
    yield n % 10;
    n = n / 10 | 0;
  }
}

function isZeroHeavy(n) {
  let difference = 0;

  for (const digit of digits(n)) {
    difference += digit === 0 ? 1 : -1;
  }

  return difference > 0;
}

function run() {
  let output = 0;

  for (let i = 1; i < 18163106; i++) {
    if (isZeroHeavy(i)) {
      output += i;
    }
  }

  return output;
}

module.exports = { run };
