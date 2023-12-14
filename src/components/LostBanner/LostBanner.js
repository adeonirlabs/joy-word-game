import React from 'react'
import Banner from '../Banner'

function LostBanner({ answer, onRestart }) {
  return (
    <Banner status="sad" action={onRestart}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  )
}

export default LostBanner
