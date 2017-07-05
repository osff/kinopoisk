import * as types from '../constants/ActionTypes'

const initialState = {
  sortBy: "id",
  sortOrder: types.SORT_ASC
}

export default function sortingReducer(state = initialState, action) {
  switch (action.type) {
    case types.SORT_BY_CHANGE:
      return Object.assign({}, state, {...state, sortBy: action.sortBy});
    case types.SORT_CHANGE:
      return Object.assign({}, state, {...state, sortOrder: action.order});
    default:
      return state;
  }
}
