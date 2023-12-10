import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: "040-1234567"
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

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
        number: newPhoneNumber
      }
      setPersons((prevPersons) => [...prevPersons, newPerson]);

    }
    setNewName("");
    setNewPhoneNumber("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map((person) => (
          <p key={person.name}>{person.name} {person.number}</p>
        ))}
        </div>
    </div>
  )
}

export default App



        
