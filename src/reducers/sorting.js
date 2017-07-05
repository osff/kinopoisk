import * as types from '../constants/ActionTypes'
import { initialState } from './index'

export default function sortingReducer(state = initialState.sorting, action) {
  switch (action.type) {
    case types.SORT_BY_CHANGE:
      return Object.assign({}, state, {...state, sortBy: action.sortBy});
    case types.SORT_CHANGE:
      return Object.assign({}, state, {...state, sortOrder: action.order});
    default:
      return state;
  }
}
