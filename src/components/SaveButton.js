import React from 'react';
import PropTypes from 'prop-types';

const SaveButton = (props) => (
  <div style={{textAlign: "center"}}>
    <input type="button" value="Save" onClick={props.onClick} />
  </div>
)

SaveButton.propTypes = {
  onClick: PropTypes.func
};

export default SaveButton;
