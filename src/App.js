import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';


class SaveButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <input type="button" value="Save" onClick={this.handleClick} />
    );
  }
}


class MovieListItemRatingDropdown extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onRatingChange(parseInt(event.target.value));
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

MovieListItemRatingDropdown.propTypes = {
  value: PropTypes.number,
};


class MovieListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {rating: this.props.rating};
    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  handleRatingChange(rating) {
    this.props.onRatingChange(parseInt(this.props.id), rating);
    this.setState({rating});
  }

  render() {
    const actors = this.props.actors.join(", ");
    const listStyles = this.state.rating < 5 ?
                        styles.movie_wrapper :
                        [styles.movie_wrapper, styles.yellow];
    return (
      <div className={css(listStyles)}>
        <div>
          <img className={css(styles.movie_image)}
            src={this.props.image}
            alt={this.props.name} />
        </div>
        <div className={css(styles.movie_description)}>
          <h2 className={css(styles.h2)}>{this.props.name} ({this.props.year})</h2>
          Actors: {actors} <br />
          Rating: <MovieListItemRatingDropdown
                    value={this.state.rating}
                    onRatingChange={this.handleRatingChange} />
        </div>

      </div>
    );
  }
}

MovieListItem.propTypes = {
  id: PropTypes.number,
  actors: PropTypes.array,
  image: PropTypes.string,
  name: PropTypes.string,
  year: PropTypes.string,
  rating: PropTypes.number,
};


class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {ratingChangeHub: []};
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleRatingChange(id, rating) {
    let ratingChangeHub = this.state.ratingChangeHub.slice();
    let foundExisted = false;

    ratingChangeHub.some((ratingChangeItem) => {
      if (ratingChangeItem['id'] === id) {
        ratingChangeItem['rating'] = rating;
        foundExisted = true;
        return true;
      }
      return false;
    });
    if (! foundExisted) {
      ratingChangeHub.push({
        'id': id,
        'rating': rating
      });
    }
    this.setState({
      ratingChangeHub: ratingChangeHub
    });
  }

  handleSaveClick() {
    alert(JSON.stringify(this.state.ratingChangeHub));
  }

  render() {
    const moviesListItems = this.props.movies.map((movie) =>
      <MovieListItem
        key={movie.id}
        id={movie.id}
        image={movie.image}
        name={movie.name}
        year={movie.year}
        actors={movie.actors}
        rating={movie.rating}
        onRatingChange={this.handleRatingChange}
      />
    );
    return (
      <div>
        <div className="movie_list">
          {moviesListItems}
        </div>
        <div>
          {<SaveButton onClick={this.handleSaveClick} />}
        </div>
      </div>
  );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array
};


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
export {MovieListItemRatingDropdown};

const styles = StyleSheet.create({
    movie_wrapper: {
        display: 'flex',
        justifyContent: 'center',
        width: "80vw",
        margin: "1em auto",
        '@media (max-width: 600px)': {
          width: "100%",
          margin: "2em 0",
        },
    },

    movie_description: {
        paddingLeft: '2em',
        width: "50%",
    },

    movie_image: {
      maxHeight: "20em",
      '@media (max-width: 600px)': {
          maxWidth: "5em",
      },
    },

    h2: {
      '@media (max-width: 600px)': {
        margin: "0 0 .5em",
        fontSize: "1.2em",
      },
    },

    yellow: {
      backgroundColor: "yellow",
    },
});
