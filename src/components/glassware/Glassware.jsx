import React from "react";
import PropTypes from "prop-types";
import "./Glassware.css";

const Glassware = ({ text, svg, textStyle, onClick, selectedGlasswares }) => {
  return (
    <div
      onClick={() => onClick(text)}
      className={`glassware__container ${
        selectedGlasswares.indexOf(text) !== -1 ? "active" : ""
      }`}
    >
      {svg}
      <span style={textStyle} className="glassware__text">
        {text}
      </span>
    </div>
  );
};

Glassware.propTypes = {
  text: PropTypes.string,
  filterStyles: PropTypes.object,
  svg: PropTypes.element,
  textStyle: PropTypes.object,
  onClick: PropTypes.func,
  selectedGlasswares: PropTypes.array
};

export default Glassware;
