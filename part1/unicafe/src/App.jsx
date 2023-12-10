import { useState } from 'react'

const Statistics = ({good, neutral, bad, total, average, positive}) => {

  return (
    <div>
      {(good == 0 && neutral == 0 && bad == 0) ? 
        <p>No feedback given</p> : 
        <>
          <h2>Statistics</h2>
          <StatisticLine text={"good"} value={good} />
          <StatisticLine text={"bad"} value={bad} />
          <StatisticLine text={"neutral"} value={neutral} />
          <StatisticLine text={"total"} value={total} />
          <StatisticLine text={"Average"} value={average}/>
          <StatisticLine text={"positive"} value={positive} />
        </>}
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <>
      {text == "positive" ? <p>{text} {value}%</p> : <p>{text} {value}</p>}
    </>
    
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClicks = () => {
    console.log("click")
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
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} total={total} 
        average={average} 
        positive={positive} 
      />
    </div>
  )
}

export default App


