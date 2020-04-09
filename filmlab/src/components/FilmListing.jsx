import React from 'react'
import FilmRow from './FilmRow.jsx'

class FilmListing extends React.Component {
    

    state ={
        filter : 'all'
    }

    handleFilterClick = (filter) => {
        this.setState({
            filter : filter
        })
        console.log("filter func running")
    }
    render(){
        
        let allFilms = this.props.films.map((el, i) => (
            <FilmRow film={el} key={el.id}/>
        ))
        const allActive = (this.state.filter === 'all')? 'is-active': ''
        const favesActive = (this.state.filter === 'faves')? 'is-active': ''
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={"film-list-filter " + allActive}  onClick={() => this.handleFilterClick('all')}>
                        ALL
                        <span className="section-count">{this.props.films.length}</span>
                    </div>
                    <div className={"film-list-filter " + favesActive} onClick={() => this.handleFilterClick('faves')}>
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                </div>
                {allFilms}
            </div>
        )
    }
}

export default FilmListing
