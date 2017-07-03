import { CHANGE_RATING } from '../constants/ActionTypes'

export const changeRating = ({id, rating}) => (
  {type: CHANGE_RATING, id, rating}
);
export const saveChangedRating = (obj) => (alert('save!'));
