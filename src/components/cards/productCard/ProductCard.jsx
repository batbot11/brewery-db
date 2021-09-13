import React from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";

const ProductCard = ({
  productData,
  selectedPrimaryNotes,
  selectedHintNotes,
  labelFile
}) => {
  const getPercievedBitterness = bitterness => {
    const value = Number(bitterness);
    if (value < 20) return "Low-to-no";
    if (value >= 20 && value < 40) return "Mild";
    if (value >= 40 && value < 60) return "Noticeable";
    if (value >= 60 && value < 80) return "Decisive";
    if (value >= 80 && value <= 100) return "Powerful";
  };

  // Declarative objects

  const allergyOptions = [
    { label: "Dairy", value: "dairy" },
    { label: "Nuts", value: "nuts" },
    { label: "Eggs", value: "eggs" },
    { label: "Gluten", value: "gluten" },
    { label: "None", value: "none" }
  ];

  const getAllergyLabel = value => {
    const filteredArray = allergyOptions.filter(
      option => option.value === value
    );
    console.log("filtered array", filteredArray);
    return filteredArray[0].label;
  };

  return (
    <div className="productcard__container">
      <div className="productcard__headline">
        {productData.name}
        <img
          className="productcard__img--star"
          src="/images/Red_star.png"
          alt=""
        />
      </div>
      <div className="productcard__headline--sub">
        Lawson’s Finest Liquids Waitsfeild, VT
      </div>

      <span className="productcard__associationstyle">
        {productData.associationStyle}
      </span>

      <div>
        {productData.label.length > 0 && (
          <img
            className="productcard__img--label"
            src={productData.label}
            alt=""
          />
        )}

        {productData.label.length === 0 && labelFile && (
          <img
            className="productcard__img--label"
            src={URL.createObjectURL(labelFile)}
            alt=""
          />
        )}

        {productData.label.length === 0 && !labelFile && (
          <div
            style={{
              backgroundColor: "#e9f1f8",
              border: "2px dashed #79add5",
              height: "114px"
            }}
            className="productcard__img--label"
          />
        )}

        <div style={{ textAlign: "center", marginLeft: "25%" }}>
          <span className="productcard__highlights--label">Available</span>
          <span className="productcard__highlights--text">Year Round</span>

          <span className="productcard__highlights--label">ABV</span>
          <span className="productcard__highlights--text">8%</span>

          <span className="productcard__highlights--label">IBU</span>
          <span className="productcard__highlights--text">65</span>

          <span className="productcard__highlights--label">Color</span>
          <span className="productcard__highlights--text">Pale Amber</span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginLeft: "-10%",
          marginTop: "40px",
          marginBottom: "40px"
        }}
      >
        {productData.allergyWarnings.map(warning => (
          <div className="productcard__allergy">
            <img
              className="productcard__img--allergy"
              src="/images/cancel@2x.png"
              alt=""
            />
            <span className="productcard__text--allergies">
              {getAllergyLabel(warning)}
            </span>
          </div>
        ))}

        <div className="productcard__allergy">
          <img
            className="productcard__img--allergy"
            src="/images/cancel@2x.png"
            alt=""
          />
          <span className="productcard__text--allergies">Gluten Free</span>
        </div>
        <div className="productcard__allergy">
          <img
            className="productcard__img--allergy"
            src="/images/cancel@2x.png"
            alt=""
          />
          <span className="productcard__text--allergies">Gluten Free</span>
        </div>
      </div>

      {/* Tasting Notes not in scope */}
      
      {/* <div className="productcard__section--heading">Tasting Notes</div>

      <p className="productcard__description--taste">
        {productData.tasteDescription}
      </p> */}

      {/* <div
        style={{ marginTop: "40px" }}
        className="productcard__section--heading"
      >
        Percieved Bitterness
      </div>
      <span className="productcard__bitterness--text">
        {getPercievedBitterness(productData.bitterness)}
      </span>

      <div style={{ width: "60%" }}>
        <input
          id="range-bitterness"
          type="range"
          className="productform__slider--bitterness"
          value={productData.bitterness}
        />
      </div> */}

      <div
        style={{ marginTop: "40px" }}
        className="productcard__section--heading"
      >
        Primary Flavor Notes
      </div>
      <div style={{ display: "flex", marginTop: "20px" }}>
        {selectedPrimaryNotes.length === 0 && (
          <React.Fragment>
            <div className="productform__note--container">
              <div
                style={{
                  backgroundColor: "#e9f1f8",
                  height: "60px",
                  borderRadius: "100%"
                }}
                className="productform__note--img"
              />
            </div>
            <div className="productform__note--container">
              <div
                style={{
                  backgroundColor: "#e9f1f8",
                  height: "60px",
                  borderRadius: "100%"
                }}
                className="productform__note--img"
              />
            </div>
            <div className="productform__note--container">
              <div
                style={{
                  backgroundColor: "#e9f1f8",
                  height: "60px",
                  borderRadius: "100%"
                }}
                className="productform__note--img"
              />
            </div>
            <div className="productform__note--container">
              <div
                style={{
                  backgroundColor: "#e9f1f8",
                  height: "60px",
                  borderRadius: "100%"
                }}
                className="productform__note--img"
              />
            </div>
          </React.Fragment>
        )}

        {selectedPrimaryNotes.map(note => (
          <div className="productform__note--container">
            <img
              className="productform__note--img"
              src={`/images/flavor-notes/${note.url}.png`}
              alt=""
            />
            <span className="productform__note--name">{note.name}</span>
          </div>
        ))}
      </div>

      <div
        style={{ marginTop: "40px" }}
        className="productcard__section--heading"
      >
        &#8220;Hints of&#8221; Flavor Notes
      </div>

      <div style={{ display: "flex", marginTop: "20px" }}>

      {selectedHintNotes.length === 0 && (
          <React.Fragment>
            <div className="productform__note--container">
              <div
                style={{
                  backgroundColor: "#e9f1f8",
                  height: "60px",
                  borderRadius: "100%"
                }}
                className="productform__note--img"
              />
            </div>
            <div className="productform__note--container">
              <div
                style={{
                  backgroundColor: "#e9f1f8",
                  height: "60px",
                  borderRadius: "100%"
                }}
                className="productform__note--img"
              />
            </div>
            <div className="productform__note--container">
              <div
                style={{
                  backgroundColor: "#e9f1f8",
                  height: "60px",
                  borderRadius: "100%"
                }}
                className="productform__note--img"
              />
            </div>
            <div className="productform__note--container">
              <div
                style={{
                  backgroundColor: "#e9f1f8",
                  height: "60px",
                  borderRadius: "100%"
                }}
                className="productform__note--img"
              />
            </div>
          </React.Fragment>
        )}


        {selectedHintNotes.map(note => (
          <div className="productform__note--container">
            <img
              className="productform__note--img"
              src={`/images/flavor-notes/${note.url}.png`}
              alt=""
            />
            <span className="productform__note--name">{note.name}</span>
          </div>
        ))}
      </div>

      <div
        style={{ marginTop: "20px" }}
        className="productcard__section--heading"
      >
        Description
      </div>

      <p className="productcard__description">
        {productData.productDescription}
      </p>
    </div>
  );
};

ProductCard.propTypes = {
  productData: PropTypes.object,
  selectedPrimaryNotes: PropTypes.array,
  selectedHintNotes: PropTypes.array,
  labelFile: PropTypes.any
};

export default ProductCard;
