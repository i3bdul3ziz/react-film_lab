import React from 'react'
import FilmPoster from './FilmPoster.jsx'
import Fave from './Fave.jsx'

class FilmRow extends React.Component {
    handleDetailsClick = (film) => {
        console.log(film)
    }
    
    render(){
        const date = new Date(this.props.film.release_date)
        return (
        <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film.title)}>
            <FilmPoster poster={this.props.film.poster_path}/>

            <div className="film-summary">
                <Fave />
                <h1>{this.props.film.title}</h1>
                <p>{date.getFullYear()}</p>
            </div>
        </div>
    )
}
}

export default FilmRow
