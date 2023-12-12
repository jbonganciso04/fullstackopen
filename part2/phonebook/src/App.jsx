import { useEffect, useState } from 'react'
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import axios from 'axios';
import personService from './services/personService';




const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    console.log("effect")
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
        console.log(response.data)
  })
  }, [])


  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNewPhoneNumber(e.target.value)
  }

  const toggleImportance = (id) => {
    const person = persons.find(n => n.id == id)
    const changePerson = {...person, important: !person.important}

    personService
      .update(id, changePerson)
      .then(response => {
        console.log("Change person is", response.data)
        setPersons(persons.map(n => n.id !== id ? n : response.data))
      })
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
        id: persons.length + 1,
        importance: false
      }

      personService.create(newPerson)
        .then(response => {
         setPersons(persons.concat(response.data));
        })

    }
    setNewName("");
    setNewPhoneNumber("")
  }

  const filteredPersons = () => {
    persons.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleDelete = async (id) => {
    console.log(id);
    const personToBeDelete = persons.find(person => person.id === id);
    console.log(`Delete ${personToBeDelete.name}`)

    if(window.confirm(`Delete ${personToBeDelete.name}?`)) {
      personService.deletePerson(id)
      setPersons((prevPersons) => prevPersons.filter((person) => person.id !== id));
    } else {
      alert(`Deletion of ${personToBeDelete.name} is cancelled.`)
    }
    
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchQuery={searchQuery} handleSearchQueryChange={handleSearchQueryChange} />
      <h3>Add a new</h3>
      <PersonForm handleSubmit={handleSubmit} newName={newName} handleNameChange={handleNameChange} newPhoneNumber={newPhoneNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons 
        searchQuery={searchQuery} 
        persons={persons} 
        filteredPersons={filteredPersons} 
        toggleImportance={toggleImportance} 
        handleDelete={handleDelete}
        />
    </div>
  )
}

export default App



        
