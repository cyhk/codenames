import React, { useContext } from 'react';
import WordCard from './WordCard';
import ClueCardContext from "./ClueCardContext";

const GameBoard = () => {
  const { words } = useContext(ClueCardContext);
  return (
    words.map(
      (wordRow, row) => wordRow.map(
        (word, i) => <WordCard key={word} word={word} position={`${row}-${i}`}/>
      )
    )
  );
}

export default GameBoard;
