import React ,{Component}from 'react';
import FilmPoster from './FilmPoster.jsx'
import Fave from './Fave.jsx'

export default class FilmRow extends Component {
    handleDetails = (film) => {
        this.props.onHandleDetailsClick(film)
    }
    render() {
        const date = new Date(this.props.film.release_date)
        return (
            <div className="film-row" onClick={() => this.handleDetails(this.props.film.title)}>
                <FilmPoster poster={this.props.film.poster_path}/>

                <div className="film-summary">
                    <Fave onFaveToggle={this.props.onFaveToggle} isFave={this.props.isFave} /> 
                    <h1>{this.props.film.title}</h1>
                    <p>{date.getFullYear()}</p>
                </div>
            </div>
        )
    }
}