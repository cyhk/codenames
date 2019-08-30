import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard';
import Chat from './Chat';
import { getWordsFromList } from "./gameHelpers";

function Codenames() {
  const [words, setWords] = useState([]);

  async function getWords() {
    let response = await getWordsFromList();

    setWords(response);
  }

  useEffect(async () => {
    await getWords();
  }, []);

  return (
    <div>
      <GameBoard words={words} />
      <Chat />
    </div>
  );
}

export default Codenames;
