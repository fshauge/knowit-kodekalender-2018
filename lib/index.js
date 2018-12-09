const inquirer = require('inquirer');
const fetch = require('node-fetch');

const challenges = [1, 2, 3, 4, 6, 9];

async function getChallenge() {
  if (process.argv.length > 2) {
    return process.argv[2];
  }

  const { challenge } = await inquirer.prompt([
    {
      type: 'list',
      name: 'challenge',
      message: 'Select a challenge:',
      choices: challenges.map(String),
      default: challenges.length - 1
    }
  ]);

  return challenge;
}

async function fetchInput(url, type) {
  const response = await fetch(url);

  switch (type) {
    case 'json':
      return await response.json();
    default:
      return await response.text();
  }
}

async function main() {
  const challenge = await getChallenge();

  // Load and run the challenge dynamically
  const { run, url, type } = require(`./${challenge}`);
  const input = url ? await fetchInput(url, type) : null;
  const output = run(input);

  console.log(`Answer: ${output}`);
}

main();
