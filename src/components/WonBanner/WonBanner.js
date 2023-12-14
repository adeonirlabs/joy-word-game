import React from 'react'
import Banner from '../Banner'

function WonBanner({ numOfGuesses, onRestart }) {
  return (
    <Banner status="happy" action={onRestart}>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  )
}

export default WonBanner
