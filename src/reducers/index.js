import { combineReducers} from 'redux'
import { SORT_ASC } from '../constants/ActionTypes'
import moviesReducer from './movies'
import filterReducer from './filter'
import sortingReducer from './sorting'

export const initialState = {
  data: [
    { id: 1, image: "https://st.kp.yandex.net/images/film_iphone/iphone360_342.jpg", year: "1994", name: "Pulp fiction", actors: ['John Travolta', 'Samuel L. Jackson',], rating: 5 },
    { id: 2, image: "https://st.kp.yandex.net/images/film_iphone/iphone360_326.jpg", year: "1994", name: "The Shawshank Redemption", actors: ['Tim Robbins', 'Morgan Freeman',], rating: 4 },
    { id: 3, image: "https://st.kp.yandex.net/images/film_iphone/iphone360_435.jpg", year: "1999", name: "The Green Mile", actors: ['Tom Henks', 'David Mors',], rating: 3 },
    { id: 4, image: "https://st.kp.yandex.net/images/film_iphone/iphone360_448.jpg", year: "1994", name: "Forrest Gump", actors: ['Tom Henks', 'Robin Rite',], rating: 2 },
    { id: 5, image: "https://st.kp.yandex.net/images/film_iphone/iphone360_329.jpg", year: "1993", name: "Schindler's List", actors: ['Liam Nisson', 'Ben Ringslie',], rating: 1 },
  ],
  filtering: {
    search: "",
    filterBy: "name"
  },
  sorting: {
    sortBy: "id",
    sortOrder: SORT_ASC
  }
};

const rootReducer = combineReducers({
  moviesReducer,
  filterReducer,
  sortingReducer
});

export default rootReducer;
