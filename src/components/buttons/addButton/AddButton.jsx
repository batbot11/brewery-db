import React from "react";
import PropTypes from "prop-types";
import "./AddButton.css";

const AddButton = ({ text, style, onClick, buttonStyle, textStyle }) => {
  return (
    <div
      className="addbutton__container"
      onClick={() => onClick()}
      style={style}
    >
      <img
        style={buttonStyle}
        className="addbutton__img"
        src="/images/Add_Button.png"
        alt=""
      />
      <span style={textStyle} className="addbutton__text">
        {text}
      </span>
    </div>
  );
};

AddButton.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object
};

export default AddButton;
