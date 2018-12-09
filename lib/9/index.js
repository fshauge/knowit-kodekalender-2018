const md5 = require('md5');

function run(input) {
  const characters = [];
  let chain = md5('julekalender');

  while (input.length > 0) {
    for (const entry of input) {
      const { ch, hash } = entry;

      if (hash === md5(chain + ch)) {
        characters.push(ch);
        chain = hash;
        input = input.filter(x => x !== entry);
        break;
      }
    }
  }

  return characters.join('');
}

const url = 'https://s3-eu-west-1.amazonaws.com/knowit-julekalender-2018/input-hashchain.json';
const type = 'json';

module.exports = { run, url, type };
