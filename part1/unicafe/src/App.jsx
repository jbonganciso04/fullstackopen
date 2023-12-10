import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClicks = () => {
    const newGoodClicks = good + 1;
    setGood(newGoodClicks);
  }

  const handleNeutralClicks = () => {
    const newNeutralClicks = neutral + 1;
    setNeutral(newNeutralClicks);
  }

  const handlebadClicks = () => {
    const newBadClicks = bad + 1;
    setBad(newBadClicks);
  }

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={handleGoodClicks}>Good</button>
        <button onClick={handleNeutralClicks}>Neutral</button>
        <button onClick={handlebadClicks}>Bad</button>
      </div>

      <div>
        <h2>Statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    </div>
  )
}

export default App