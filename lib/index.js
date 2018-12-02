const inquirer = require('inquirer');
const fetch = require('node-fetch');

// Get the number of days passed this month
const days = new Date().getDate();

// Create the sequence [1, days]
const challenges = Array
  .apply(null, { length: days })
  .map(Number.call, Number)
  .map(x => x + 1)
  .map(String);

async function main() {
  const { challenge } = await inquirer.prompt([
    {
      type: 'list',
      name: 'challenge',
      choices: challenges,
      default: challenges.length - 1
    }
  ]);

  // Load and run the challenge dynamically
  const { run, url } = require(`./${challenge}`);
  const input = url ? await fetch(url).then(res => res.text()) : null;
  const output = run(input);

  console.log(`Answer: ${output}`);
}

main();
