import { CHANGE_RATING, FILTER_BY_CHANGE, FILTER_SEARCH_CHANGE,
  SORT_BY_CHANGE, SORT_CHANGE, SORT_ASC, SORT_DESC } from '../constants/ActionTypes'

export const changeRating = ({id, rating}) => (
  {type: CHANGE_RATING, id, rating}
);

export const filterByChange = (filterBy) => (
  {type: FILTER_BY_CHANGE, filterBy}
);

export const filterSearchChange = (search) => (
  {type: FILTER_SEARCH_CHANGE, search}
);

export const sortByChange = (sortBy) => (
  {type: SORT_BY_CHANGE, sortBy}
);

export const sortOrderAsk = () => (
  {type: SORT_CHANGE, order: SORT_ASC}
);

export const sortOrderDesc = () => (
  {type: SORT_CHANGE, order: SORT_DESC}
);
