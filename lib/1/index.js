function run(input) {
  const lines = input.split('\n');
  let output = 0;
  let previous = 0;

  for (const line of lines) {
    const value = parseInt(line);

    if (value >= previous) {
      output += value;
      previous = value;
    }
  }

  return output;
}

const url = 'https://s3-eu-west-1.amazonaws.com/knowit-julekalender-2018/input-vekksort.txt';

module.exports = { run, url };
