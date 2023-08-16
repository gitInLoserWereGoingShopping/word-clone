import React from "react";

import { range } from "../../utils";

function NewAndImprovedGuessInputHopefully({ tentativeGuess, handleSubmit }) {
  return (
    <div className='new-guess-input-wrapper'>
      <div className='guess-input-tiles'>
        {range(5).map((num) => {
          const currentLetter = tentativeGuess[num] || '';
          const currentKey = `tentative-guess-${num}`;
          return (
            <span key={currentKey} className='cell guess-input-cell'>{currentLetter}</span>
          );
        })}
      </div>
      {tentativeGuess.length === 5
        ? <button className='guess-input-send' onClick={handleSubmit}>Check Guess</button>
        : null
      }
    </div>
  );
}

export default NewAndImprovedGuessInputHopefully;
