import React from 'react'
import MovieCard from './MovieCard'

const MovieScreen = ({addMovie, movieList, page, setPage, list}) => {

    const movieDisplay = movieList.map(movie => {
        return <MovieCard 
        key={movie.title}
        addMovie={addMovie}
        movie={movie}/>
    })

    return(
        <div className="page">
            <h1>Kajsia's Movie Theatre</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="movie-container">{movieDisplay}</div>
        </div>
    )
}

export default MovieScreen