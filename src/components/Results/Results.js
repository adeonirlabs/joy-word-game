import React from 'react'

function Results({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ value, id }) => (
        <p className="guess" key={id}>
          {value}
        </p>
      ))}
    </div>
  )
}

export default Results
