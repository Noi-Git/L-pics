import SearchBar from './components/SearchBar'
import searchImages from './api'

function App() {
  const handleSubmit = (searchTerm) => {
    //data for the searchTerm is coming from <input> inside of <SearchBar />
    searchImages(searchTerm)
  }

  return (
    <div>
      <SearchBar onSearchFormSubmit={handleSubmit} />
    </div>
  )
}

export default App
