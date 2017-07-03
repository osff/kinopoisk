import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import MovieListItemRatingDropdown from '../components/MovieListItemRatingDropdown'


const MovieListItem = (props) => {

  const actors = props.actors.join(", ");
  const listStyles = props.rating < 5 ?
                      styles.movie_wrapper :
                      [styles.movie_wrapper, styles.yellow];
  return (
    <div className={css(listStyles)}>
      <div>
        <img className={css(styles.movie_image)}
          src={props.image}
          alt={props.name} />
      </div>
      <div className={css(styles.movie_description)}>
        <h2 className={css(styles.h2)}>{props.name} ({props.year})</h2>
        Actors: {actors} <br />
        Rating: <MovieListItemRatingDropdown
                  id={props.id}
                  value={props.rating}
                  onRatingChange={props.onRatingChange} />
      </div>
    </div>
  );

}

MovieListItem.propTypes = {
  id: PropTypes.number,
  actors: PropTypes.array,
  image: PropTypes.string,
  name: PropTypes.string,
  year: PropTypes.string,
  rating: PropTypes.number,
  onRatingChange: PropTypes.func
};

export default MovieListItem;

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
