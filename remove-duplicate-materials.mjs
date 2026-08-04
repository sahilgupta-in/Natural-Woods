import fs from 'fs';
import path from 'path';

const files = [
  'src/Data/humanFigureProducts.ts',
  'src/Data/wallArt.ts',
  'src/Data/woodenSculptures.ts',
];

for (const relPath of files) {
  const filePath = path.resolve(relPath);
  const text = fs.readFileSync(filePath, 'utf8');
  const lines = text.split(/\r?\n/);
  let inObject = false;
  let materialSeen = false;
  let changed = false;
  const output = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (/^\{\s*$/.test(trimmed)) {
      inObject = true;
      materialSeen = false;
      output.push(line);
      continue;
    }
    if (inObject && /^material:\s*"[^"]*"\s*,?$/.test(trimmed)) {
      if (materialSeen) {
        changed = true;
        continue;
      }
      materialSeen = true;
      output.push(line);
      continue;
    }
    if (inObject && /^\}\s*,?$/.test(trimmed)) {
      inObject = false;
      materialSeen = false;
    }
    output.push(line);
  }

  if (changed) {
    fs.writeFileSync(filePath, output.join('\n'), 'utf8');
    console.log(`${relPath}: removed duplicate material declarations`);
  } else {
    console.log(`${relPath}: no duplicate material declarations found`);
  }
}
