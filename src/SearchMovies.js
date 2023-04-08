import React, {useState} from "react";
import MovieCard from "./MovieCard";
import { Form, Button } from "react-bootstrap";

function SearchMovies(){
    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])
    const searchMovies = async (e) => {
        e.preventDefault() // To avoid the page from refreshing everytime
        const url = `https://api.themoviedb.org/3/search/movie?api_key=b50c394be747e8dda5de98f51e142610&language=en-US&query=${query}
        &page=1&include_adult=false`
        
        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
        }
        catch(err) {
            console.log(err)
        }
    }
    return (
        <>
            <Form className="form" onSubmit={searchMovies}>
                <Form.Group>
                <Form.Label htmlFor="query">Movie Name</Form.Label>
                <Form.Control 
                    className="input"
                    type="text" name="query" placeholder="Type a movie to search" 
                    value={query} onChange={(e) => setQuery(e.target.value)}/>
                <Button variant="primary" size="lg" className="button" type="submit">Search</Button>
                </Form.Group>
            </Form>
            <div>
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div key = {movie.id}>
                            <MovieCard movie={movie}/>
                    </div>
                ))}
            </div>
        </>
    )
}
export default SearchMovies
