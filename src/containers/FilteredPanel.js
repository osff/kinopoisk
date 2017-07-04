import { connect } from 'react-redux'
import { filterSearchChange, filterByChange } from '../actions'
import FilterPanel from '../components/FilterPanel'

const getFilterCategories = (movies) => (
  Object.keys(movies[0])
)

const mapStateToProps = state => ({
  filtering: state.filterReducer,
  items: getFilterCategories(state.moviesReducer)
})

const mapDispatchToProps = {
  onFilterSearchChange: filterSearchChange,
  onFilterByChange: filterByChange
}

const FilteredPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterPanel)

export default FilteredPanel;
