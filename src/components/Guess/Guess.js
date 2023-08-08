import React from "react";

import { range } from '../../utils';

function Guess({ guessIndex, guesses }) {
  return (
    <p className='guess'>
      {guesses[guessIndex]
        ? Array.from(guesses[guessIndex]).map((letter, idx) => (
            <span key={`guess-letter-${idx}`} className='cell'>{letter}</span>
        ))
        : range(5).map((num) => (
            <span key={`empty-letter-${num}`} className='cell'></span>
        ))}
    </p>
  );
}

export default Guess;
