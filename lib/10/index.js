class Scanner {
  constructor(input) {
    this.input = input;
    this.index = 0;
  }

  hasMore() {
    return this.index < this.input.length;
  }

  next() {
    return this.input[this.index++];
  }

  skip(predicate) {
    while (this.hasMore() && predicate(this.input[this.index])) {
      this.index++;
    }
  }
}

const operations = {
  ' ': ({ stack }) => {
    stack.push(31);
  },

  ':': ({ stack }) => {
    const numbers = stack.splice(0, stack.length);
    const sum = numbers.reduce((a, b) => a + b, 0);
    stack.push(sum);
  },

  '|': ({ stack }) => {
    stack.push(3);
  },

  '\'': ({ stack }) => {
    const A = stack.pop();
    const B = stack.pop();
    stack.push(A + B);
  },

  '.': ({ stack }) => {
    const A = stack.pop();
    const B = stack.pop();
    stack.push(A - B);
    stack.push(B - A);
  },

  '_': ({ stack }) => {
    const A = stack.pop();
    const B = stack.pop();
    stack.push(A * B);
    stack.push(A);
  },

  '/': ({ stack }) => {
    stack.pop();
  },

  'i': ({ stack }) => {
    const A = stack.pop();
    stack.push(A);
    stack.push(A);
  },

  '\\': ({ stack }) => {
    const A = stack.pop();
    stack.push(A + 1);
  },

  '*': ({ stack }) => {
    const A = stack.pop();
    const B = stack.pop();
    stack.push(Math.ceil(A / B));
  },

  ']': ({ stack }) => {
    const A = stack.pop();

    if (A % 2 === 0) {
      stack.push(1);
    }
  },

  '[': ({ stack }) => {
    const A = stack.pop();

    if (A % 2 === 1) {
      stack.push(A);
    }
  },

  '~': ({ stack }) => {
    const A = stack.pop();
    const B = stack.pop();
    const C = stack.pop();
    stack.push(Math.max(A, B, C));
  },

  'K': ({ scanner }) => {
    scanner.skip(x => x !== '\n');
    scanner.next();
  }
};

function run(input) {
  const scanner = new Scanner(input);
  const stack = [];
  const env = { scanner, stack };

  while (scanner.hasMore()) {
    scanner.skip(x => x === '\n');
    const token = scanner.next();

    if (token in operations) {
      operations[token](env);
    }
  }

  return Math.max(...stack);
}

const url = 'https://s3-eu-west-1.amazonaws.com/knowit-julekalender-2018/input.spp';

module.exports = { run, url };
