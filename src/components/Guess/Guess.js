import React from "react";

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';



function Guess({ guessIndex, guesses, answer, letterStatuses }) {
  const currentGuess = guesses[guessIndex];
  //can only become more correct from new guesses coming in
  const updateLetterStatus = (letter, status) => {
    const prevStatus = letterStatuses[letter];
    if (status === 'correct') {
      letterStatuses[letter] = status;
    } else if (status === 'misplaced' && prevStatus !== 'correct') {
      letterStatuses[letter] = 'misplaced';
    }
  };
  return (
    <p className='guess'>
      {currentGuess
        ? checkGuess(currentGuess, answer).map(({letter, status}, idx) => {
          updateLetterStatus(letter, status);
          return ( 
            <span key={`guess-letter-${idx}`} className={`cell ${status}`}>{letter}</span>
        )})
        : range(5).map((num) => (
            <span key={`empty-letter-${num}`} className='cell'></span>
        ))}
    </p>
  );
};

export default Guess;
