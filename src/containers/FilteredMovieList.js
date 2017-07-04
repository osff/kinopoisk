import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import MovieList from '../components/MovieList'

const getFilteredMovies = (movies, filtering) => {
  if (filtering.filterBy && filtering.search) {
    let search = filtering.search.toUpperCase();
    return movies.filter(movie => (
      movie[filtering.filterBy].toString().toUpperCase().includes(search)
    ));
  }
  return movies;
}

const mapStateToProps = (state) => ({
  movies: getFilteredMovies(state.moviesReducer, state.filterReducer)
})

const mapDispatchToProps = {
}

const FilteredMovies = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)

export default FilteredMovies;
