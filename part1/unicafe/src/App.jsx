import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClicks = () => {
    const newGoodClicks = good + 1;
    const newTotal = total + 1;
    setGood(newGoodClicks);
    setTotal(newTotal);
    handleAverageCalculations(newTotal, newGoodClicks, bad);
    handlePositive(newGoodClicks, newTotal)
  }

  const handleNeutralClicks = () => {
    const newNeutralClicks = neutral + 1;
    const newTotal = total + 1;
    setTotal(newTotal)
    setNeutral(newNeutralClicks);
    handlePositive(good, newTotal);
  }

  const handlebadClicks = () => {
    const newBadClicks = bad + 1;
    const newTotal = total + 1;
    setBad(newBadClicks);
    setTotal(newTotal)
    handleAverageCalculations(newTotal, good, newBadClicks);
    handlePositive(good, newTotal);
  }

  const handleAverageCalculations = (newTotal, good, bad) => {
    const sumOfScores = good - bad;
    const newAverage = sumOfScores / newTotal;
    setAverage(newAverage);
  }

  const handlePositive = (newGood, newTotal) => {
    const newPositive = (newGood / newTotal) * 100;
    setPositive(newPositive);
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
        <p>total {total}</p>
        <p>average {average}</p>
        <p>positive {positive}%</p>
      </div>
    </div>
  )
}

export default App