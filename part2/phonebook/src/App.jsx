import { useState } from 'react'
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState('');


  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNewPhoneNumber(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nameExists = persons.some(person => person.name.toLowerCase() === newName.toLowerCase());
    if (nameExists) {
      alert (`${newName} is already added to the phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newPhoneNumber,
        id: persons.length + 1
      }
      setPersons((prevPersons) => [...prevPersons, newPerson]);

    }
    setNewName("");
    setNewPhoneNumber("")
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchQuery={searchQuery} handleSearchQueryChange={handleSearchQueryChange} />
      <h3>Add a new</h3>
      <PersonForm handleSubmit={handleSubmit} newName={newName} handleNameChange={handleNameChange} newPhoneNumber={newPhoneNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons searchQuery={searchQuery} persons={persons} filteredPersons={filteredPersons} />
    </div>
  )
}

export default App



        
