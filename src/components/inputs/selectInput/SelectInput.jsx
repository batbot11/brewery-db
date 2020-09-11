import React from "react";
import Select from "react-select";
import Proptypes from "prop-types";
import "./SelectInput.css";

const SelectInput = ({ label, options, onChange, value, placeholder, style }) => {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#e9f1f8",
      border: "1px solid #e9f1f8",
      borderRadius: "3px",
      height: "40px",
      "&:hover": {
        border: '1px solid #e9f1f8',
        cursor: 'pointer'
      },
      "&:focus": {
        outline: 'none'
      },
      "&:active": {
        outline: 'none'
      }
    }),

    indicatorSeparator: (base, state) => ({
      ...base,
      width: "2px",
      backgroundColor: "#ACCCE5",
      height: "100%",
      marginTop: "0px"
    }),

    singleValue: (base, state) => ({
      ...base,
      color: '#003b71',
      fontWeight: '500',
      fontSize: '14px',
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? '#e9f1f8' : '#ffffff',
      fontWeight: 500,
      color: 'var(--brew-logix-blue)',
    }),

  };

  const getValue = value => {
    if (options && options.length > 0) {
      const filteredOptions = options.filter(option => option.value === value);
      return filteredOptions[0];
    }
    return "";
  };

  return (
    <div style={style} className="textinput__container">
      <label className="textinput__label">{label}</label>
      <Select
        className="selectinput__select"
        options={options}
        styles={customStyles}
        onChange={obj => onChange(obj.value)}
        value={getValue(value)}
        placeholder={placeholder || ""}
      />
    </div>
  );
};

SelectInput.propTypes = {
  label: Proptypes.string,
  options: Proptypes.array,
  onChange: Proptypes.func,
  value: Proptypes.any,
  placeholder: Proptypes.string,
  style: Proptypes.object,
};

export default SelectInput;
