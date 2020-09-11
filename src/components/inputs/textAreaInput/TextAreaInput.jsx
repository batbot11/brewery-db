import React from "react";
import PropTypes from "prop-types";
import "./TextAreaInput.css";

const TextAreaInput = ({ label, style, placeholder, rows, onChange, value }) => {
  return (
    <div style={style} className="textinput__container">
      <label className="textinput__label">{label}</label>
      <textarea
        placeholder={placeholder}
        className="textareainput__input"
        rows={rows || 5}
        onChange={e => onChange(e.target.value)}
        value={value}
      ></textarea>
    </div>
  );
};

TextAreaInput.propTypes = {
  label: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default TextAreaInput;
