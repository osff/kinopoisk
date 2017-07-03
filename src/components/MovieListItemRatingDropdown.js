import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieListItemRatingDropdown extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onRatingChange({
      'id': this.props.id,
      'rating': parseInt(event.target.value)
    });
  }

  render() {
    return (
      <select value={this.props.value} onChange={this.handleChange}>
       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>
       <option value="4">4</option>
       <option value="5">5</option>
     </select>
    );
  }
}

MovieListItemRatingDropdown.propTypes = {
  value: PropTypes.number,
  onRatingChange: PropTypes.func
};
