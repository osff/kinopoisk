import { connect } from 'react-redux'
import { filterSearchChange, filterByChange } from '../actions'
import FilterPanel from '../components/FilterPanel'

const mapStateToProps = state => ({
  filtering: state.filterReducer
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
