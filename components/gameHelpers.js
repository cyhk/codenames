import fs from "fs";
import { sample } from "lodash";

export async function getWordsFromList() {
  fs.readFile("../nounlist.txt", (err, data) => {
    if (err) throw err;
    console.log(data);
    return sample(data);
  });
}