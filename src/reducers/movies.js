import * as types from '../constants/ActionTypes'
import { initialState } from './index'

export default function moviesReducer(state = initialState.data, action) {
  switch (action.type) {
    case types.CHANGE_RATING:
      return state.map(movie =>
                            movie.id === action.id ?
                            {...movie, rating: action.rating} : movie);
    default:
      return state;
  }
}
