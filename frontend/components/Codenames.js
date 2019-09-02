import React, { useState, useEffect } from 'react';
import _ from "lodash";
import GameBoard from './GameBoard';
import Chat from './Chat';
import ClueCardContext from "./ClueCardContext";
import { getWordsFromApi } from "./gameHelpers";

const FIRST_TEAM_SQUARES = 8;
const SECOND_TEAM_SQUARES = 7;
const BLACK_SQUARES = 1;

const Codenames = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    async function getWords() {
      setWords(await getWordsFromApi());
    }
    getWords();
  }, []);

  const makeClueCard = () => {
    const red = Math.floor(Math.random() * 2);
    const row = Array.from({ length: 5 });
    const clueCard = row.map(() => Array.from({ length: 5 }));

    const squares = _.range(25);
    const nonNeutralSquares = _.sampleSize(
      squares,
      FIRST_TEAM_SQUARES + SECOND_TEAM_SQUARES + BLACK_SQUARES
    );

    let count = 1;
    while (nonNeutralSquares.length > 0) {
      const cellToChangeIdx = nonNeutralSquares.pop();
      const cellRow = Math.floor(cellToChangeIdx / 5);
      const cellCol = cellToChangeIdx % 5;

      if (count > FIRST_TEAM_SQUARES + SECOND_TEAM_SQUARES) {
        clueCard[cellRow][cellCol] = "black"
      } else if (count > FIRST_TEAM_SQUARES) {
        clueCard[cellRow][cellCol] = red ? "blue" : "red";
      } else {
        clueCard[cellRow][cellCol] = red ? "red" : "blue";
      }

      count++;
    }

    return clueCard;
  }

  return (
    <ClueCardContext.Provider
      value={{ clueCard: makeClueCard(), words: words }}
    >
      <div>
        <GameBoard />
        <Chat />
      </div>
    </ClueCardContext.Provider>
  );
}

export default Codenames;
