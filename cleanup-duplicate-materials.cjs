const fs = require('fs');
const path = require('path');
const files = [
  'src/Data/humanFigureProducts.ts',
  'src/Data/wallArt.ts',
  'src/Data/woodenSculptures.ts',
];
for (const file of files) {
  const filePath = path.resolve(file);
  const text = fs.readFileSync(filePath, 'utf8');
  const lines = text.split(/\r?\n/);
  const output = [];
  let removed = 0;
  for (let i = 0; i < lines.length; i++) {
    const current = lines[i];
    const next = lines[i + 1];
    const currentTrim = current.trim();
    const nextTrim = next?.trim();
    const isMaterialLine = /^material:\s*"[^"]*",?$/.test(currentTrim);
    const isDuplicateHandcrafted = /^material:\s*"Handcrafted",?$/.test(nextTrim);
    if (isMaterialLine && isDuplicateHandcrafted) {
      output.push(current);
      removed += 1;
      i += 1; // skip duplicate handcrafted material line
      continue;
    }
    output.push(current);
  }
  if (removed > 0) {
    fs.writeFileSync(filePath, output.join('\n'), 'utf8');
    console.log(`${file}: removed ${removed} duplicate material lines`);
  } else {
    console.log(`${file}: no duplicates found`);
  }
}
