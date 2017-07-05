import * as types from '../constants/ActionTypes'

const initialState = {
  search: "",
  filterBy: "name"
}

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case types.FILTER_BY_CHANGE:
      return Object.assign({}, state, {...state, filterBy: action.filterBy});
    case types.FILTER_SEARCH_CHANGE:
      return Object.assign({}, state, {...state, search: action.search});
    default:
      return state;
  }
}
