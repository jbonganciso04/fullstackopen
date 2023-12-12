import React from 'react'

const Person = ({ person, toggleImportance, handleDelete }) => {

    const label = person.important ? "make not important" : "make important";
  return (
    <>
        <p key={person.id}>{person.name} {person.number}</p>
        <button onClick={() => toggleImportance(person.id)}>{label}</button>
        <button onClick={() => handleDelete(person.id)}>delete</button>
    </>
  )
}

export default Person