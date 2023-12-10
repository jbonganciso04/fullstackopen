import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({ course }) => {
  return (
    <div>
        <Header name={course.name} key={course.id} />
        <Content parts={course.parts} key={course.id} />
    </div>
  )
}

export default Course