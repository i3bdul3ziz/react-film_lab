import React from 'react';
import FilmListing from './components/FilmListing.jsx'
import FilmDetails from './components/FilmDetails.jsx'
import TMDB from './TMDB'

let films = TMDB.films
function App() {
  return (
    <div className="film-library">
      <FilmListing films={films}/>
      <FilmDetails films={films}/>
    </div>
  )
}

export default App;
