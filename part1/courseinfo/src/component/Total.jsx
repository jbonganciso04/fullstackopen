import React from 'react'

const Total = ({exercises}) => {

    let sum = 0;

    sum = exercises.map((exercise) => {
        sum += exercise
    })
  return (
    <div>Number of exercises {sum}</div>
  )
}

export default Total