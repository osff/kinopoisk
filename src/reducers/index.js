import { combineReducers} from 'redux'
import moviesReducer from './movies'
import filterReducer from './filter'
import sortingReducer from './sorting'

const rootReducer = combineReducers({
  moviesReducer,
  filterReducer,
  sortingReducer
});

export default rootReducer;
