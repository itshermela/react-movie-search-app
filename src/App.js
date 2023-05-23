import React, {useState, useEffect} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchMovies from './SearchMovies'
import MovieCard from "./MovieCard"

function App() {
  const [popular, setPopular] = useState([]);
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=b50c394be747e8dda5de98f51e142610&language=en-US&page=1"
  useEffect(() => {
    fetchPopular()
  },[])
  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json()
    console.log(movies);
    setPopular(movies.results)
  }

  return (
    <div className="container">
      <h1 className ="text-center mb-4">React Movie Search</h1>
      <SearchMovies/>
      <center><h3>Popular Movies</h3></center>
      <div>
      {popular.map(movie => {
        return <MovieCard key={movie.id} movie={movie} />
      })}
      </div>
    </div>
  )
}

export default App
