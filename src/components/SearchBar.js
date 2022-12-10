import React, { useState } from 'react'

const SearchBar = ({ onSearchFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    onSearchFormSubmit(searchTerm)
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={searchTerm} onChange={handleChange} />
      </form>
    </div>
  )
}

export default SearchBar
