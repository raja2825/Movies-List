import MovieCard from "../components/MovieCard"
import { useState } from "react"
import "../css/Home.css"
import inception from "../assets/inception.jpeg"
import john from "../assets/john wick.jpg"

function Home() {
  const [searchQuery, setSearchQuery] = useState("")


  const allMovies = [
    {
      id: 1,
      title: "John Wick",
      year: "2014",
      image:john 
    },
    {
      id: 2,
      title: "Inception",
      year: "2010",
      image: inception
    },
    {
      id: 3,
      title: "Interstellar",
      year: "2014",
      image: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg"
    }
  ]

  // Live search filtering
  const filteredMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="home">
      <div className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        ) : (
          <p className="no-results">No movies found...</p>
        )}
      </div>
    </div>
  )
}

export default Home
