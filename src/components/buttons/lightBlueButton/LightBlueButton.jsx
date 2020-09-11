import React from 'react';
import PropTypes from 'prop-types';
import './LightBlueButton.css';

const LightBlueButton = ({ text, style }) => {
  return (
<button className="lightbluebutton__btn" style={style} >{text}</button>
  );
};

LightBlueButton.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
};

export default LightBlueButton;