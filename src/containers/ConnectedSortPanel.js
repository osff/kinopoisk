import { connect } from 'react-redux'
import { sortOrderAsk, sortOrderDesc, sortByChange } from '../actions'
import SortPanel from '../components/SortPanel'

const getSortCategories = (movies) => (
  Object.keys(movies[0])
)

const mapStateToProps = state => ({
  sorting: state.sortingReducer,
  items: getSortCategories(state.moviesReducer)
})

const mapDispatchToProps = {
  onSortAsk: sortOrderAsk,
  onSortDesc: sortOrderDesc,
  onSortByChange: sortByChange
}

const ConnectedSortPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(SortPanel)

export default ConnectedSortPanel;
