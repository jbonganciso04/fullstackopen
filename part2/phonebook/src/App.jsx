import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName
    }
    setNewName("");
    setPersons((prevPersons) => [...prevPersons, newPerson]);

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type='text' value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
        {persons.map((person) => (
          <p key={person.name}>{person.name}</p>
        ))}
        </div>
    </div>
  )
}

export default App



        
