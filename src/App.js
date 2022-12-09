import SearchBar from './components/SearchBar'

function App() {
  const handleSubmit = (searchTerm) => {
    //data for the searchTerm is coming from <input> inside of <SearchBar />
    console.log('Do a search with', searchTerm)
  }

  return (
    <div>
      <SearchBar onSearchFormSubmit={handleSubmit} />
    </div>
  )
}

export default App
