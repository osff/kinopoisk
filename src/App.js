import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from './logo.svg';
import './App.css';

class MovieListItemRatingDropdown extends Component {
  handleChange() {

  }

  render() {
    return (
      <select value={this.props.value} onChange={this.handleChange}>
       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>
       <option value="4">4</option>
       <option value="5">5</option>
     </select>
    );
  }
}

class MovieListItem extends Component {
  render() {
    const actors = this.props.actors.join(", ");
    return (
      <div className={css(styles.movieWrapper)}>
        <div>
          <img className={css(styles.movieImage)} src={this.props.image} />
        </div>
        <div className={css(styles.movieDescription)}>
          <h1>{this.props.name} ({this.props.year})</h1>
          Actors: {actors} <br />
          Rating: <MovieListItemRatingDropdown value={this.props.rating} />
        </div>

      </div>
    );
  }
}

class MovieList extends Component {
  render() {
    const moviesListItems = this.props.movies.map((movie) =>
      <MovieListItem
        key={movie.id}
        image={movie.image}
        name={movie.name}
        year={movie.year}
        actors={movie.actors}
        rating={movie.rating}
      />
    );
    return (
      <div className="movie-list">
        {moviesListItems}
      </div>
    );
  }
}

class App extends Component {
  render() {
    const movies = [
      { id: 1, image: "https://st.kp.yandex.net/images/film_iphone/iphone360_342.jpg", year: "1994", name: "Pulp fiction", actors: ['John Travolta', 'Samuel L. Jackson',], rating: 5 },
      { id: 2, image: "https://st.kp.yandex.net/images/film_iphone/iphone360_326.jpg", year: "1994", name: "The Shawshank Redemption", actors: ['Tim Robbins', 'Morgan Freeman',], rating: 4 },
      { id: 3, image: "https://st.kp.yandex.net/images/film_iphone/iphone360_435.jpg", year: "1999", name: "The Green Mile", actors: ['Tom Henks', 'David Mors',], rating: 3 },
      { id: 4, image: "https://st.kp.yandex.net/images/film_iphone/iphone360_448.jpg", year: "1994", name: "Forrest Gump", actors: ['Tom Henks', 'Robin Rite',], rating: 2 },
      { id: 5, image: "https://st.kp.yandex.net/images/film_iphone/iphone360_329.jpg", year: "1993", name: "Schindler's List", actors: ['Liam Nisson', 'Ben Ringslie',], rating: 1 },
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

const styles = StyleSheet.create({
    movieWrapper: {
        display: 'flex',
        justifyContent: 'center',
        width: "80vw",
        margin: "1em auto"
    },

    movieDescription: {
        padding: '1em 0 0 2em',
        width: "50%"
    },

    movieImage: {
      width: "70%"
    }
});
