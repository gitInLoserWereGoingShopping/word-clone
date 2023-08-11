import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';
import VisualKeyboard from '../VisualKeyboard/VisualKeyboard';

import { sample } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS, initialLetterStatuses } from '../../data';

// Pick a random word on every pageload.
let answer = sample(WORDS);
const newAnswer = () => {
  answer = sample(WORDS);
};
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  //list of guesses here
  const [guesses, setGuesses] = React.useState([]);
  const numOfGuessesRemaining = NUM_OF_GUESSES_ALLOWED - guesses.length;
  const maxGuessesReached = numOfGuessesRemaining === 0;
  const isAnswered = guesses.includes(answer);
  const isGuessInputEnabled = !(isAnswered || maxGuessesReached);
  console.log({numOfGuessesRemaining, maxGuessesReached});
  const newGame = () => {
    setGuesses([]);
    newAnswer();
    console.info({ answer });
  };
  const letterStatuses = initialLetterStatuses;
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} letterStatuses={letterStatuses}/>
      {(isAnswered || maxGuessesReached) ? <button className='loss new-game' onClick={newGame}>New Game</button> : null}
      {isGuessInputEnabled ? <GuessInput guesses={guesses} setGuesses={setGuesses}/> : null}
      <VisualKeyboard letterStatuses={letterStatuses}/>
      {isAnswered ? <HappyBanner numOfGuesses={guesses.length}/> : null}
      {maxGuessesReached ? <SadBanner answer={answer}/> : null}
    </>
  );
}

export default Game;
