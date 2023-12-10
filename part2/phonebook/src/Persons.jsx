import React from 'react'

const Persons = ({searchQuery, persons, filteredPersons}) => {
  return (
    <div>
          {searchQuery == ""
          ? persons.map((person) => (
              <p key={person.id}>{person.name} {person.number}</p>
            )) 
          : filteredPersons.map((person) => (
            <p key={person.id}>{person.name} {person.number}</p>
          ))}
        </div>
  )
}

export default Persons