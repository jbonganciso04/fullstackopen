import React from 'react'

const Filter = ({searchQuery, handleSearchQueryChange}) => {
  return (
    <div>
        Filter shown with <input type='text' value={searchQuery} onChange={handleSearchQueryChange} />
    </div>
  )
}

export default Filter