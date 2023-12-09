import React from 'react'

function Form({ onAddGuess }) {
  const [attempt, setAttempt] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddGuess(attempt)
    setAttempt('')
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="A 5 letter word"
        value={attempt}
        onChange={(event) => {
          setAttempt(event.target.value.toUpperCase())
        }}
      />
    </form>
  )
}

export default Form
