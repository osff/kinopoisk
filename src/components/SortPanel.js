import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SORT_ASC, SORT_DESC } from '../constants/ActionTypes'

export default class SortPanel extends Component {
  constructor(props) {
    super(props);
    this.handleByChange = this.handleByChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleByChange(event) {
    this.props.onSortByChange(event.target.value);
  }

  handleSortChange(event) {
    this.props.onSortChange(event.target.value);
  }

  render() {
    const asc_style = this.props.sorting.sortOrder === SORT_ASC
              ? {...styles.sorting_button, ...styles.sorting_button_active} :
              styles.sorting_button;
    const desc_style = this.props.sorting.sortOrder === SORT_DESC
              ? {...styles.sorting_button, ...styles.sorting_button_active} :
              styles.sorting_button;

    return (
      <div style={styles.sort_panel}>
        <h5>Sort panel</h5>
        <select value={this.props.sorting.sortBy} onChange={this.handleByChange}>
          {this.props.items.map(item => (
            <option key={item} value={item}> {item} </option>
          ))}
        </select>&nbsp;
        <span style={asc_style} onClick={this.props.onSortAsk}>Asc</span> &nbsp;
        <span style={desc_style} onClick={this.props.onSortDesc}>Desc</span>
      </div>
    )
  }
}

SortPanel.propTypes = {
  sorting: PropTypes.object.isRequired
};

const styles = {
  sort_panel: {
    textAlign: "center",
    marginLeft: "1.5em"
  },

  sorting_button: {
    border: "1px solid LightGrey",
    color: "LightGrey",
    padding: ".25em",
    cursor: "pointer"
  },

  sorting_button_active: {
    borderColor: "blue",
    color: "blue",
    cursor: "default"
  }
}
