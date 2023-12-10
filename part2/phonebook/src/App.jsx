import { useState } from 'react'

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
      <div>
        filter shown with <input type='text' value={searchQuery} onChange={handleSearchQueryChange} />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type='text' value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input type='text' value={newPhoneNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
          {searchQuery == ""
          ? persons.map((person) => (
              <p key={person.id}>{person.name} {person.number}</p>
            )) 
          : filteredPersons.map((person) => (
            <p key={person.id}>{person.name} {person.number}</p>
          ))}
        </div>
    </div>
  )
}

export default App



        
