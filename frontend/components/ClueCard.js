import React, { useContext } from 'react';
import ClueCardContext from "./ClueCardContext";

const ClueCard = ({ isSpyMaster }) => {
  const { clueCard } = useContext(ClueCardContext);

  return  isSpyMaster? (
    <div>
      clueCard.map(row => row.map(cell => <div>{cell}</div>))
    </div>
  ): (
    <div>
      <p>BACKFACE OF THE CARD</p>
    </div>
  );
}

export default ClueCard;
