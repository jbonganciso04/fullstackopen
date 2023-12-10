import React from 'react'

const Total = ({ parts }) => {
    const sum = parts.reduce((accumulator, part) => accumulator + part.exercises, 0);

  return (
    <div><b>total of {sum} exercises</b></div>
  )
}

export default Total