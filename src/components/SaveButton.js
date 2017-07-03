import React from 'react';
import PropTypes from 'prop-types';

const SaveButton = (props) => (
  <input type="button" value="Save" onClick={props.onClick} />
)

SaveButton.propTypes = {
  onClick: PropTypes.func
};

export default SaveButton;
