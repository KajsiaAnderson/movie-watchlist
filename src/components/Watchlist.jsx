import React from 'react'
import MovieCard from './MovieCard'

const Watchlist = ({list}) => {

    const movieDisplay = list.map((movie) => {
        return <MovieCard 
        key={movie.title}
        movie={movie}/>})

    return (
        <div className="watchlist">
            <h1>My Watchlist</h1>
            <div className="movie-container">{movieDisplay}</div>
        </div>
    )
}

export default Watchlist