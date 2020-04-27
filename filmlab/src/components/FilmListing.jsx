import React, { Component } from 'react';
import FilmRow from './FilmRow.jsx'

class FilmListing extends Component {
    state = {
       filter: 'all',
       isFave: this.props.faves.includes(this.props.films)
    }

    handleFilterClick = (filter) => {
       console.log('Setting filter to ' + filter)
       this.setState({filter})
       if(this.state.filter == "faves"){

       }
    }

   render() {
       let aFilms = this.state.filter == "all" ? this.props.films : this.props.faves  
       const allFilms = aFilms.map ((el, i) => (
           <FilmRow film={el} key={el.id} onFaveToggle = {() => this.props.onFaveToggle(el)} isFave=
       {this.props.faves.includes(el)} onHandleDetailsClick = {() => this.props.onHandleDetailsClick(el)} />
       ))
       return (
           <div className="film-list">
           <h1 className="section-title">FILMS</h1>
           <div className="film-list-filters">
               <div className={"film-list-filter " + (this.state.filter === "All" ? "is-active" : "")} onClick={()=> this.handleFilterClick("all")}>
                   ALL
                   <span className="section-count">{this.props.films.length}</span>
               </div>
               <div className={"film-list-filter "  + (this.state.filter === "faves" ? "is-active" : "")} onClick={()=> this.handleFilterClick("faves")}>
                   FAVES
       <span className="section-count">{this.props.faves.length}</span>
               </div>
           </div>
           {allFilms}
       </div>
       )
   }
}

export default FilmListing;