import React from "react";
import PropTypes from "prop-types";
import "./TextInput.css";

const TextInput = ({ label, placeholder, style, onChange, value }) => {
  return (
    <div style={style} className="textinput__container">
      <label className="textinput__label">{label}</label>
      <input
        placeholder={placeholder}
        className="textinput__input"
        type="text"
        onChange={e => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func, 
  value: PropTypes.string,
};

export default TextInput;
