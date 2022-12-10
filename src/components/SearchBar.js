import React, { useState } from 'react'
import './SearchBar.css'

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
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Enter search term</label>
        <input value={searchTerm} onChange={handleChange} />
      </form>
    </div>
  )
}

export default SearchBar
