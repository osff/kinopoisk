import { connect } from 'react-redux'
import MovieList from '../components/MovieList'
import { SORT_ASC } from '../constants/ActionTypes'

const getFilteredMovies = (movies, filtering) => {
  if (filtering.filterBy && filtering.search) {
    let search = filtering.search.toUpperCase();
    return movies.filter(movie => (
      movie[filtering.filterBy].toString().toUpperCase().includes(search)
    ));
  }
  return movies;
}

const getSortedMovies = (movies, sorting) => {
  let movies_sorted = movies.slice();
  if (sorting.sortOrder === SORT_ASC) {
    movies_sorted.sort((a, b) => {
      if (a[sorting.sortBy] > b[sorting.sortBy]) return 1;
      else return -1;
    });
  } else {
    movies_sorted.sort((a, b) => {
      if (a[sorting.sortBy] < b[sorting.sortBy]) return 1;
      else return -1;
    });
  }

  return movies_sorted;
}

const getFilteredAndSortedMovies = (movies, filtering, sorting) => {
  let filtered_movies = getFilteredMovies(movies, filtering);
  return getSortedMovies(filtered_movies, sorting);
}

const mapStateToProps = (state) => ({
  movies: getFilteredAndSortedMovies(state.moviesReducer, state.filterReducer,
                                      state.sortingReducer)
})

const mapDispatchToProps = {
}

const ConnectedMovieList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)

export default ConnectedMovieList;
