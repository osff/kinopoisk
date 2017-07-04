import * as types from '../constants/ActionTypes'
import { initialState } from './index'

export default function filterReducer(state = initialState.filtering, action) {
  switch (action.type) {
    case types.FILTER_BY_CHANGE:
      return Object.assign({}, state, {...state, filterBy: action.filterBy});
    case types.FILTER_SEARCH_CHANGE:
      return Object.assign({}, state, {...state, search: action.search});
    default:
      return state;
  }
}
