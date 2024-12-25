import React, {useState} from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import {GuessInput} from '../GuessInput/';
import GuessDisplay from "../GuessDisplay";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

range(10).map((index) => console.log('index:', index));

function Game() {
  const [allGuesses, setAllGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [currentGameStatus, setCurrentGameStatus] = useState('ongoing');

  function determineGuessQuality(letter, index) {
    if (letter === answer[index]) {
      return 'correct';
    } else if (answer.includes(letter)) {
      return 'misplaced';
    } else {
      return 'incorrect';
    }
  }

  function transformToObjectArray(word) {
    let objArray = [];
    [...word].forEach((letter, index) => {
      objArray.push({letter: letter, result: determineGuessQuality(letter, index)});
    });
    console.log('objArray:', objArray);
    return objArray;
  }

  function addGuess(event, guess) {
    event.preventDefault();
    const objArray = transformToObjectArray(guess);
    const myGuesses = [...allGuesses, objArray]
    setAllGuesses([...allGuesses, objArray]);
    setCurrentGuess('');
    if (guess === answer) {
      setCurrentGameStatus('won');
    } else if (myGuesses.length === 6) {
      setCurrentGameStatus('lost');
    }
  }

  return (
      <div>
        <GuessDisplay guesses={allGuesses}/>
        <GuessInput
            submitAction={(event) => addGuess(event, currentGuess)}
            currentGuess={currentGuess}
            setCurrentGuess={setCurrentGuess}/>
        {currentGameStatus === 'won' &&
            (<div className="happy banner">
              <p>
                <strong>Congratulations!</strong> Got it in
                <strong>{allGuesses.length} guesses</strong>.
              </p>
            </div>)}
        {currentGameStatus === 'lost' && (
            <div className="sad banner">
              <p>
                <strong>Game Over!</strong> The word was
                <strong>{answer}</strong>.
              </p>
            </div>
        )}
      </div>);
}

export default Game;
