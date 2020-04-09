import React from 'react'

function FilmPoster({poster}) {
    return (
        <img src={'https://image.tmdb.org/t/p/w780/'+poster} alt="Movie Poster" />
    )
}

export default FilmPoster
