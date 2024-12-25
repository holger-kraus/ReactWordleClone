import React from 'react';

function GuessInput({submitAction, currentGuess, setCurrentGuess}) {
  return <div>
    <form onSubmit={submitAction} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" pattern="[A-Za-z]{5}" required={true} onChange={(event)=> setCurrentGuess(event.target.value.toUpperCase())} value={currentGuess} type="text"/>
    </form>
  </div>;
}

export default GuessInput;
