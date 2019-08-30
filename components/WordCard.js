import React from 'react';

function WordCard(props) {

  function revealColor(){
    return "red"
  }

  return (
    <div className="card w-20" onClick={revealColor}>
      {props.word}
    </div>
  );
}

export default WordCard;
