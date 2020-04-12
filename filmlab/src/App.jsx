import React, { Component } from 'react';
import FilmListing from './components/FilmListing.jsx'
import FilmDetails from './components/FilmDetails.jsx'
import TMDB from './TMDB'

let films = TMDB.films


export default class App extends Component {

  state = {
    films: films ,
    faves: [],
    current: {}
  }
  handleFaveToggle = (film) => {
    let faves = this.state.faves.slice()
    let filmIndex = faves.indexOf(film)
    if(filmIndex >= 0){
      faves.splice(filmIndex, 1)
      console.log(`removing ${film.title} from faves...`);
      
    } else {
      faves.push(film)
      console.log(`Adding ${film.title} to faves....`);
      
    }
    this.setState({faves});
  }
  
  handleDetailsClick = (film) => {
    console.log(film)
    this.setState(prevState => ({
      current: film
    }));
    
  }
    render(){
    return (
      <div className="film-library">
        <FilmListing films = {this.state.films} faves = {this.state.faves} onFaveToggle = {this.handleFaveToggle} handleDetailsClick = {this.handleDetailsClick}/>
        <FilmDetails films = {this.state.films} curr = {this.state.current} />
      </div>
    );
  }
  }