import React from 'react';
import Person from './Person';

const Persons = ({ searchQuery, persons, filteredPersons, toggleImportance, handleDelete }) => {
  return (
    <div key={1}>
      {searchQuery === ''
        ? persons.map((person) => (
            <Person key={person.id} person={person} toggleImportance={toggleImportance} handleDelete={handleDelete} />
          ))
        : filteredPersons.map((person, index) => (
            // Use index as a fallback key if person.id is not available or not unique
            <Person key={person.id} person={person} toggleImportance={toggleImportance} handleDelete={handleDelete} />
          ))}
    </div>
  );
};

export default Persons;
