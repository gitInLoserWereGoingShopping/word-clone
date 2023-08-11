import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess';

function GuessResults({ guesses, answer, letterStatuses }) {
  const guessId = React.useId();
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map(guessIndex => (
        <Guess
          key={`guess-${guessId}-${guessIndex}`}
          guesses={guesses}
          guessIndex={guessIndex}
          answer={answer}
          letterStatuses={letterStatuses}
        />
      ))}
    </div>
  );
}

export default GuessResults;
