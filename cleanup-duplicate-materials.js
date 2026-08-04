const fs = require('fs');
const path = require('path');
const files = [
  'src/Data/humanFigureProducts.ts',
  'src/Data/wallArt.ts',
  'src/Data/woodenSculptures.ts',
];
for (const file of files) {
  const filePath = path.resolve(file);
  let text = fs.readFileSync(filePath, 'utf8');
  const regex = /(\n\s*material:\s*"[^"]*"\s*\r?\n)(\s*material:\s*"Handcrafted"\s*\r?\n)/g;
  let count = 0;
  text = text.replace(regex, (match, p1, p2) => {
    count += 1;
    return p1;
  });
  if (count > 0) {
    fs.writeFileSync(filePath, text, 'utf8');
    console.log(file, 'removed', count, 'duplicate material lines');
  } else {
    console.log(file, 'no duplicates found');
  }
}
