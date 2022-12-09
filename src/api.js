import axios from 'axios'

const searchImages = async (searchTerm) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
    },
    params: {
      query: searchTerm,
    },
  })

  return response.data.result
}

export default searchImages
