import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieListItem from '../components/MovieListItem'

const MovieList = (props) => {
  const moviesListItems = props.movies.map((movie) =>
    <MovieListItem
      key={movie.id}
      id={movie.id}
      image={movie.image}
      name={movie.name}
      year={movie.year}
      actors={movie.actors}
      rating={movie.rating}
      onRatingChange={props.onRatingChange}
    />
  );
  return (
      <div className="movie_list">
        {moviesListItems}
      </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array,
  onRatingChange: PropTypes.func
};

export default MovieList;
