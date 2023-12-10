import React from 'react'

const Total = ({parts}) => {
  const totalExercises = parts.map(part => part.exercises).reduce((acc, curr) => acc + curr, 0);
  return (
    <div>Number of exercises {totalExercises}</div>
  )
}

export default Total