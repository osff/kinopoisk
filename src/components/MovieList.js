import React from 'react';
import PropTypes from 'prop-types';
import MovieListItem from '../components/MovieListItem'

const MovieList = ({movies, onRatingChange}) => (
  <div className="movie_list">
    {movies.map(movie =>
      <MovieListItem
        key={movie.id}
        id={movie.id}
        image={movie.image}
        name={movie.name}
        year={movie.year}
        actors={movie.actors}
        rating={movie.rating}
        onRatingChange={onRatingChange}
      />
    )}
  </div>
)

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      actors: PropTypes.array.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  onRatingChange: PropTypes.func.isRequired
};

export default MovieList;
