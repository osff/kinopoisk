import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MovieListItem extends Component {
  render() {
    return (
    <div className="movie-wrapper">
      {this.props.name} {this.props.actors} {this.props.rating}
    </div>);
  }
}

class MovieList extends Component {
  render() {
    const moviesList = this.props.movies.map((movie) =>
      <MovieListItem key={movie.id}
        name={movie.name} actors={movie.actors}
        rating={movie.rating} />
    );
    return (
    <div className="movie-list">
      {moviesList}
    </div>);
  }
}

class App extends Component {
  render() {
    const movies = [
      { id: 1, name: "Pulp fiction", actors: ['John Travolta', 'Samuel L. Jackson',], rating: 5 },
      { id: 2, name: "Pulp fiction", actors: ['John Travolta', 'Samuel L. Jackson',], rating: 4 },
      { id: 3, name: "Pulp fiction", actors: ['John Travolta', 'Samuel L. Jackson',], rating: 3 },
      { id: 4, name: "Pulp fiction", actors: ['John Travolta', 'Samuel L. Jackson',], rating: 2 },
      { id: 5, name: "Pulp fiction", actors: ['John Travolta', 'Samuel L. Jackson',], rating: 1 },
    ]
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Kinopoisk</h2>
        </div>
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default App;
