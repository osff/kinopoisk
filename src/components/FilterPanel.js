import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FilterPanel extends Component {
  constructor(props) {
    super(props);
    this.handleByChange = this.handleByChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleByChange(event) {
    this.props.onFilterByChange(event.target.value);
  }

  handleSearchChange(event) {
    this.props.onFilterSearchChange(event.target.value);
  }

  render() {
    return (
      <div style={styles.filter_panel}>
        <select value={this.props.filtering.filterBy} onChange={this.handleByChange}>
          {this.props.items.map(item => (
            <option key={item} value={item}> {item} </option>
          ))}
        </select>
        <input type="text" value={this.props.filtering.search} onChange={this.handleSearchChange} />
      </div>
    )
  }
}

FilterPanel.propTypes = {
  filtering: PropTypes.object.isRequired
};

const styles = {
  filter_panel: {
    textAlign: "center",
    margin: "1em"
  }
}
