import React from "react";

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guessIndex, guesses, answer }) {
  const currentGuess = guesses[guessIndex];
  return (
    <p className='guess'>
      {currentGuess
        ? checkGuess(currentGuess, answer).map(({letter, status}, idx) => ( 
            <span key={`guess-letter-${idx}`} className={`cell ${status}`}>{letter}</span>
        ))
        : range(5).map((num) => (
            <span key={`empty-letter-${num}`} className='cell'></span>
        ))}
    </p>
  );
}

export default Guess;
