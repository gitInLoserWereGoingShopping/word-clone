import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import VisualKeyboard from '../VisualKeyboard/VisualKeyboard';

import { sample } from '../../utils';
import { WORDS, initialLetterStatuses } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  //list of guesses here
  const [guesses, setGuesses] = React.useState([]);
  const letterStatuses = initialLetterStatuses;
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} letterStatuses={letterStatuses}/>
      <GuessInput guesses={guesses} setGuesses={setGuesses}/>
      <VisualKeyboard letterStatuses={letterStatuses}/>
    </>
  );
}

export default Game;
