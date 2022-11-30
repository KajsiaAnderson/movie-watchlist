import './App.css';
import Header from './components/Header'
import React, { useState, useEffect } from 'react'
import MovieScreen from './components/MovieScreen';
import Watchlist from './components/Watchlist';
import axios from "axios"

function App() {

  const [movieList, setMovieList] = useState([])
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {getData()}, [page])

  function getData() {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    .then((res) => {
      console.log(res.data.results)
      setMovieList(res.data.results)
    })
  }

  function addMovie(movie) {
    setList(list => {
      return [...list, movie]})
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
        />
        <Watchlist list={list} />
      </main>
    </div>
  );
}

export default App;
