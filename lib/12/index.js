function run() {
  const emojis = '😡😚😀😷😨😥😮😀😩😀😤😩😥😌😀😩😀😷😡😮😮😡😀😤😩😥😀😬😩😫😥😀😣😡😥😳😡😲😎😀😱😚😀😨😯😷😀😣😯😭😥😟😀😡😚😀😨😥😀😤😩😥😤😀😡😭😯😮😧😀😨😩😳😀😦😲😩😥😮😤😳😎';
  const codePoints = [];

  for (let i = 0; i < emojis.length; i += 2) {
    codePoints.push(emojis.codePointAt(i));
  }

  const baseline = Math.min(...codePoints);

  const result = codePoints
    .map(value => String.fromCodePoint(value - baseline + 32))
    .join('');

  return result;
}

module.exports = { run };
