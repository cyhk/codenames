import React, { useContext } from 'react';
import ClueCardContext from "./ClueCardContext";

const WordCard = ({word, position}) => {
  const { clueCard } = useContext(ClueCardContext);

  function revealColor(){
    const coord = position.split('-');
    
    return clueCard[coord[0]][coord[1]];
  }

  return (
    <div onClick={revealColor}>
      {word}
    </div>
  );
}

export default WordCard;
