import React from 'react';
import { Row} from '../Row/'
import { range } from '../../utils.js'
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function GuessDisplay({guesses}) {
  return (
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((index) => <Row key={index} word={guesses[index]}/>)}
      </div>);
}

export default GuessDisplay;
