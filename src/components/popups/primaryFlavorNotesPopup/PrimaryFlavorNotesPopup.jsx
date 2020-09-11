import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AddButton from "../../buttons/addButton/AddButton";
import Select from "react-select";
import "./PrimaryFlavorNotesPopup.css";

const PrimaryFlavorNotesPopup = ({ onCloseClick, heading, onSubmit }) => {
  const [selectedNotes, setSelectedNotes] = useState([]);

  const [selectedNotesObj, setSelectedNotesObj] = useState([]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const notesArray = [
    { name: "Biscuits", url: "biscuits" },
    { name: "Bread", url: "bread" },
    { name: "Brown Bread", url: "bread" },
    { name: "Butter", url: "butter" },
    { name: "Crackers", url: "crackers" },
    { name: "Malt", url: "malt" },
    { name: "Chillie", url: "chillie" },
    { name: "Chocolate", url: "chocolate" },
    { name: "Coconut", url: "coconut" },
    { name: "Bacon", url: "bacon" }
  ];

  const toggleSelected = (name, noteObj) => {
    let array = [...selectedNotes];
    let objArray = [...selectedNotesObj];
    const index = selectedNotes.indexOf(name);
    if (index !== -1) {
      array.splice(index, 1);
      objArray.splice(index, 1);
    } else {
      array = [...array, name];
      objArray = [...objArray, noteObj];
    }
    setSelectedNotes(array);
    setSelectedNotesObj(objArray);
  };

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#e9f1f8",
      border: "1px solid #e9f1f8",
      borderRadius: "3px",
      height: "40px",
      "&:hover": {
        border: "1px solid #e9f1f8",
        cursor: "pointer"
      },
      width: '80%',
      marginLeft: '50%',
      transform: 'translateX(-50%)',
      marginBottom: '20px'
    }),

    indicatorSeparator: (base, state) => null,

    placeholder: defaultStyle => ({
      ...defaultStyle,
      color: 'var(--twilight-blue)',
      fontWeight: 500
    }),

    dropdownIndicator: (base, state) => ({
      display: 'none'
    }),

  };

  return (
    <React.Fragment>
      <div className="primaryflavornotespopup__disabled" />

      <div className="primaryflavornotespopup__container">
        <div className="primaryflavornotespopup__heading">{heading}</div>

        <img
          onClick={() => onCloseClick()}
          src="/images/close.png"
          className="primaryflavornotespopup__icon--close"
          alt=""
        />

        <div className="primaryflavornotespopup__main">
          {notesArray.map((note, index) => (
            <div
              className={`primaryflavornotespopup__img--container ${
                selectedNotes.indexOf(note.name) === -1 ? "" : "active"
              }`}
              style={{ textAlign: "center" }}
              key={note.name}
              onClick={() => toggleSelected(note.name, note)}
            >
              <img
                className="primaryflavornotespopup__img"
                src={`/images/flavor-notes/${note.url}.png`}
                alt=""
              />
              <span className="primaryflavornotespopup__note--text">
                {note.name}
              </span>
            </div>
          ))}

          <div
            className="primaryflavornotespopup__img--container"
            style={{ textAlign: "center" }}
            // onClick={() => toggleSelected(note.name, note)}
          >
            <img
              className="primaryflavornotespopup__img"
              src="/images/Add_Button.png"
              alt=""
            />
            <span className="primaryflavornotespopup__note--text">
              See More
            </span>
          </div>

          <div className="primaryflavorpopup__search--container">
            <span className="primaryflavorpopup__search--text">
              Don't see your Flavor? Search Here
            </span>
            <Select styles={selectStyles} placeholder="Search a Flavor" />
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => {
              onSubmit(selectedNotesObj);
              onCloseClick();
            }}
            className="primaryflavornotespopup__btn--finish"
          >
            Finish
          </button>
          <button
            onClick={() => onCloseClick()}
            className="primaryflavornotespopup__btn--cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

PrimaryFlavorNotesPopup.propTypes = {
  onCloseClick: PropTypes.func,
  heading: PropTypes.any,
  onSubmit: PropTypes.func
};

export default PrimaryFlavorNotesPopup;
