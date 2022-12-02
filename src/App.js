import './App.css';
import Header from './components/Header'
import React, { useState, useEffect, useCallback } from 'react'
import MovieScreen from './components/MovieScreen';
import Watchlist from './components/Watchlist';
import axios from "axios"

function App() {

  const [movieList, setMovieList] = useState([])
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)

  const getData = useCallback(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    .then((res) => {
      console.log(res.data.results)
      setMovieList(res.data.results)
    })
  }, [page])

  useEffect(() => {getData()}, [getData])
 
  function addMovie(movie) {
    setList(list => {
      return [...list, movie]})
  }

  function removeMovie(movie) {
    const newState = list.filter((el) => {
      return el !== movie
    })
    setList(newState)
  }

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          addMovie={addMovie}
          movieList={movieList}
          page={page}
          setPage={setPage}
          list={list}
          removeMovie={removeMovie}
        />
        <Watchlist
        list={list}
        removeMovie={removeMovie}
        />
      </main>
    </div>
  );
}

export default App;
