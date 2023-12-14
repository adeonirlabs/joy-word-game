import React from 'react'

import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { sample } from '../../utils'
import { WORDS } from '../../data'

import Form from '../Form'
import Results from '../Results'
import WonBanner from '../WonBanner'
import LostBanner from '../LostBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS))
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

  const handleRestart = () => {
    const newAnswer = sample(WORDS)
    setAnswer(newAnswer)
    setStatus('playing')
    setGuesses([])
  }

  return (
    <>
      <Results guesses={guesses} answer={answer} />
      <Form gameStatus={status} onAddGuess={handleAddGuess} />
      {status === 'won' && (
        <WonBanner numOfGuesses={guesses.length} onRestart={handleRestart} />
      )}
      {status === 'lost' && (
        <LostBanner answer={answer} onRestart={handleRestart} />
      )}
    </>
  )
}

export default Game
