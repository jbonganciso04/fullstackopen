import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  
   
  const [selected, setSelected] = useState(0);

  const [scores, setScore] = useState(new Array(anecdotes.length).fill(0));

  const [mostVoteIndex, setMostVoteIndex] = useState(0);
  const [mostVoteCount, setMostVoteCount] = useState(0)

  const generateRandomNum = (max) => {
    return Math.floor(Math.random() * max);
  }

  const handleButtonClicked = (max) => {
    let temp = selected;
    while(temp == selected) {
      temp = generateRandomNum(max);
    }
    setSelected(temp);
  }

  const handleScoreClick = () => {
    const newScore = [...scores];
    newScore[selected] += 1;
    setScore(newScore);
    handleMostVote(newScore);
  }

  const handleMostVote = (newScores) => {
    const maxScore = Math.max(...newScores);
    setMostVoteCount(maxScore);
    const index = newScores.indexOf(maxScore);
    setMostVoteIndex(index);
  };

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {scores[selected]} votes</p>
        <button onClick={handleScoreClick}>Vote</button>
        <button onClick={() => handleButtonClicked(anecdotes.length)}>next anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        {<p>{anecdotes[mostVoteIndex]}</p>}
      </div>
    </div>
  )
}

export default App