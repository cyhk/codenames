import React from 'react';
import WordCard from './WordCard';

function GameBoard(props) {
  return (
    props.words.map(
      word => <WordCard key={word} word={word} />
    )
  );
}

export default GameBoard;
