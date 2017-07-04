import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import logo from '../logo.svg';
import '../App.css';
import '../index.css';
import SaveButton from '../components/SaveButton'
import FilteredMovieList from '../containers/FilteredMovieList'
import FilteredPanel from '../containers/FilteredPanel'
import { changeRating } from '../actions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {updatedRating: []};
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
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
    this.props.changeRating(data);
    this.setState({
      updatedRating: this._updateRatingInArrayOfMovies(this.state.updatedRating, data),
    });
  }

  handleSaveClick() {
    alert(JSON.stringify(this.state.updatedRating));
  }

  onFilterChange(value) {
    alert(value);
  }

  render() {
    // const filterBy = Object.keys(this.props.movies[0]);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Kinopoisk</h2>
        </div>
        <div style={styles.app_body}>
          <FilteredPanel />
          <FilteredMovieList onRatingChange={this.handleRatingChange} />
          <SaveButton onClick={this.handleSaveClick} />
        </div>
      </div>
    )
  }
}

App.PropTypes = {
  movies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  movies: state.moviesReducer
})

const mapDispatchToProps = {
  changeRating: changeRating
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const styles = {
  app_body: {
    width: "80%",
    margin: "0 auto"
  }
}
