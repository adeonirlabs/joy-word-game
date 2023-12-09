import React from 'react'

function Form() {
  const [guess, setGuess] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.info({ guess })
    setGuess('')
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
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase())
        }}
      />
    </form>
  )
}

export default Form
