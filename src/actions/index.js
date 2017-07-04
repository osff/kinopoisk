import { CHANGE_RATING, FILTER_BY_CHANGE, FILTER_SEARCH_CHANGE } from '../constants/ActionTypes'

export const changeRating = ({id, rating}) => (
  {type: CHANGE_RATING, id, rating}
);

export const filterByChange = (filterBy) => (
  {type: FILTER_BY_CHANGE, filterBy}
);

export const filterSearchChange = (search) => (
  {type: FILTER_SEARCH_CHANGE, search}
);
