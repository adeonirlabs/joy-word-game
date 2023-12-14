import React from 'react'

import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { sample } from '../../utils'
import { WORDS } from '../../data'

import Form from '../Form'
import Results from '../Results'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [status, setStatus] = React.useState('playing')
  const [guesses, setGuesses] = React.useState([])

  const handleAddGuess = (attempt) => {
    const newAttempt = {
      value: attempt,
      id: `${attempt}-${Date.now()}`,
    }

    const nextGuesses = [...guesses, newAttempt]

    setGuesses(nextGuesses)

    if (attempt.toUpperCase() === answer) {
      setStatus('won')
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost')
    }
  }

  return (
    <>
      <Results guesses={guesses} answer={answer} />
      <Form gameStatus={status} onAddGuess={handleAddGuess} />
    </>
  )
}

export default Game
