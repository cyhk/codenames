import fs from "fs";
import _ from "lodash";

export default async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  const words = fs.readFileSync("nouns.txt", "utf-8");
  const wordsArr = words.split(/[\r\n]/g);
  const wordChoices = _.sampleSize(wordsArr, 25);

  const row = Array.from({ length: 5 });
  const wordGrid = row.map(() => Array.from({ length: 5 }));

  wordChoices.forEach(
    (word, i) => wordGrid[Math.floor(i / 5)][i % 5] = word
  );
  
  res.json({ words: wordGrid });
}