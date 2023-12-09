import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import Form from '../Form'
import Results from '../Results'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])

  const handleAddGuess = (attempt) => {
    const newAttempt = {
      value: attempt,
      id: `${attempt}-${Date.now()}`,
    }
    setGuesses([...guesses, newAttempt])
  }

  return (
    <>
      <Results guesses={guesses} />
      <Form onAddGuess={handleAddGuess} />
    </>
  )
}

export default Game
