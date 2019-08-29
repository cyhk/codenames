import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard';
import Chat from './Chat';
import { getWordsFromApi } from "./gameHelpers";

function Codenames() {
  const [words, setWords] = useState([]);

  async function getWords() {
    let response = await getWordsFromApi();
    // let words = await response.json();
    setWords(response);
  }

  useEffect(() => {
    getWords();
  }, []);

  return (
    <div>
      <GameBoard words={words} />
      <Chat />
    </div>
  );
}

export default Codenames;
