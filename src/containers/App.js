import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';
import SaveButton from '../components/SaveButton'
import MovieList from '../components/MovieList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, image: "https://st.kp.yandex.net/images/film_iphone/iphone360_342.jpg", year: "1994", name: "Pulp fiction", actors: ['John Travolta', 'Samuel L. Jackson',], rating: 5 },
        { id: 2, image: "https://st.kp.yandex.net/images/film_iphone/iphone360_326.jpg", year: "1994", name: "The Shawshank Redemption", actors: ['Tim Robbins', 'Morgan Freeman',], rating: 4 },
        { id: 3, image: "https://st.kp.yandex.net/images/film_iphone/iphone360_435.jpg", year: "1999", name: "The Green Mile", actors: ['Tom Henks', 'David Mors',], rating: 3 },
        { id: 4, image: "https://st.kp.yandex.net/images/film_iphone/iphone360_448.jpg", year: "1994", name: "Forrest Gump", actors: ['Tom Henks', 'Robin Rite',], rating: 2 },
        { id: 5, image: "https://st.kp.yandex.net/images/film_iphone/iphone360_329.jpg", year: "1993", name: "Schindler's List", actors: ['Liam Nisson', 'Ben Ringslie',], rating: 1 },
      ],
      updatedRating: [],
      rating: this.props.rating,
    };
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  _updateRatingInArrayOfMovies(arr, data) {
    let {id, rating} = data;
    let arr_copy = arr.slice();
    let foundExisted = false;
    arr_copy.some((ratingChangeItem) => {
      if (ratingChangeItem['id'] === id) {
        ratingChangeItem['rating'] = rating;
        foundExisted = true;
        return true;
      }
      return false;
    });
    if (! foundExisted) {
      arr_copy.push({
        'id': id,
        'rating': rating
      });
    }
    return arr_copy;
  }

  handleRatingChange(data) {
    this.setState({
      data: this._updateRatingInArrayOfMovies(this.state.data, data),
      updatedRating: this._updateRatingInArrayOfMovies(this.state.updatedRating, data),
    });
  }

  handleSaveClick() {
    alert(JSON.stringify(this.state.updatedRating));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Kinopoisk</h2>
        </div>
        <div>
          <MovieList
            movies={this.state.data}
            onRatingChange={this.handleRatingChange}
          />
        </div>
        <div>
          {<SaveButton onClick={this.handleSaveClick} />}
        </div>
      </div>
    );
  }
}


export default App;
