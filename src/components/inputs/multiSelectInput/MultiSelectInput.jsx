import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const MultiSelectInput = ({
  label,
  options,
  onChange,
  value,
  placeholder,
  style
}) => {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#e9f1f8",
      border: "1px solid #e9f1f8",
      borderRadius: "3px",
      minHeight: "40px",
      "&:hover": {
        border: "1px solid #e9f1f8",
        cursor: "pointer"
      },
      "&:focus": {
        outline: "none"
      },
      "&:active": {
        outline: "none"
      }
    }),

    indicatorSeparator: (base, state) => ({
      ...base,
      width: "2px",
      backgroundColor: "#ACCCE5",
      height: "100%",
      marginTop: "0px"
    }),

    multiValue: (base, state) => ({
      ...base,
      backgroundColor: "var(--brew-logix-blue)",
      borderRadius: "2px",
      fontWeight: 500,
      color: "#ffffff"
    }),

    multiValueLabel: (base, state) => ({
      ...base,
      color: "#ffffff"
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#e9f1f8" : "#ffffff",
      fontWeight: 500,
      color: "var(--brew-logix-blue)"
    })
  };

  const getValue = selectedValues => {
    let result = [];
    if (selectedValues && selectedValues.length > 0) {
      selectedValues.map(selectedValue => {
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === selectedValue)
            return (result = [...result, options[i]]);
        }
      });
    }
    return result;
  };

  return (
    <div style={style} className="textinput__container">
      <label className="textinput__label">{label}</label>
      <Select
        className="selectinput__select"
        options={options}
        styles={customStyles}
        isMulti
        onChange={array => {
          const valuesArray = (array || []).map(obj => obj.value);
          onChange(valuesArray);
        }}
        value={getValue(value)}
        placeholder={placeholder || ""}
      />
    </div>
  );
};

MultiSelectInput.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  style: PropTypes.object
};

export default MultiSelectInput;
