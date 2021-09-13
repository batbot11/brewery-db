import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import TextInput from "../../inputs/textInput/TextInput";
import SelectInput from "../../inputs/selectInput/SelectInput";
import MultiSelectInput from "../../inputs/multiSelectInput/MultiSelectInput";
import TextAreaInput from "../../inputs/textAreaInput/TextAreaInput";
import AddButton from "../../buttons/addButton/AddButton";
import GlasswareList from "../../glasswareList/GlasswareList";
import LightBlueButton from "../../buttons/lightBlueButton/LightBlueButton";
import PrimaryFlavorNotesPopup from "../../popups/primaryFlavorNotesPopup/PrimaryFlavorNotesPopup";
import UploadLabelPopup from "../../popups/uploadLabelPopup/UploadLabelPopup";
import "./ProductForm.css";

const ProductForm = ({
  productData,
  onChange,
  labelFile,
  setLabelFile,
  selectedPrimaryNotes,
  setSelectedPrimaryNotes,
  selectedHintNotes,
  setSelectedHintNotes,
  selectedGlasswares,
  setSelectedGlasswares,
}) => {
  // Refs

  const labelInput = useRef(null);

  // States

  const [showPrimaryFlavorPopup, setShowPrimaryFlavorPopup] = useState(false);

  const [showHintsPopup, setShowHintsPopup] = useState(false);

  const [errors, setErrors] = useState({});

  const [showUploadLabelPopup, setShowUploadLabelPopup] = useState(false);

  // State for changing css property filter to change glassware color
  const [srmColor, setSrmColor] = useState("#F8F4B4");

  // Functions

  const validate = (name) => {
    const object = { ...errors };

    switch (name) {
      case "name":
        if (name.length < 3 || name.length > 30) {
          object.name = "Name Should be between 3 and 30 letters";
        } else delete object.name;
        break;
      default:
        break;
    }
    setErrors(object);
  };

  const changeThumbColor = (value) => {
    const number = Number(value);
    const element = document.getElementById("range-srm");
    if (number < 10) {
      element.classList.remove("twenty");
      element.classList.add("ten");
    }
    if (number < 20 && number >= 10) {
      element.classList.remove("thirty");
      element.classList.remove("ten");
      element.classList.add("twenty");
    }
    if (number < 30 && number >= 20) {
      element.classList.remove("forty");
      element.classList.remove("twenty");
      element.classList.add("thirty");
    }
    if (number < 40 && number >= 30) {
      element.classList.remove("fifty");
      element.classList.remove("thirty");
      element.classList.add("forty");
    }
    if (number < 50 && number >= 40) {
      element.classList.remove("sixty");
      element.classList.remove("forty");
      element.classList.add("fifty");
    }
    if (number < 60 && number >= 50) {
      element.classList.remove("seventy");
      element.classList.remove("fifty");
      element.classList.add("sixty");
    }
    if (number < 70 && number >= 60) {
      element.classList.remove("eighty");
      element.classList.remove("sixty");
      element.classList.add("seventy");
    }
    if (number < 80 && number >= 70) {
      element.classList.remove("ninty");
      element.classList.remove("seventy");
      element.classList.add("eighty");
    }
    if (number < 90 && number >= 80) {
      element.classList.remove("hundred");
      element.classList.remove("eighty");
      element.classList.add("ninty");
    }
    if (number <= 100 && number >= 90) {
      element.classList.remove("ninty");
      element.classList.add("hundred");
    }
  };

  const decideSrmColor = (srmString) => {
    let hexColor = "";
    const srmValue = Number(srmString);
    switch (srmValue) {
      case 1:
        hexColor = "#F8F4B4";
        break;
      case 2:
        hexColor = "#F9E06C";
        break;
      case 3:
        hexColor = "#F4CE51";
        break;
      case 4:
        hexColor = "#F2BE37";
        break;
      case 5:
        hexColor = "#EDAC1E";
        break;
      case 6:
        hexColor = "#E59C19";
        break;
      case 7:
        hexColor = "#DF8F16";
        break;
      case 8:
        hexColor = "#D68019";
        break;
      case 9:
        hexColor = "#CF731C";
        break;
      case 10:
        hexColor = "#BD591B";
        break;
      case 11:
        hexColor = "#C3621B";
        break;
      case 12:
        hexColor = "#C86B1B";
        break;
      case 13:
        hexColor = "#C05727";
        break;
      case 14:
        hexColor = "#AD4417";
        break;
      case 15:
        hexColor = "#AE4818";
        break;
      case 16:
        hexColor = "#AD4417";
        break;
      case 17:
        hexColor = "#A73D15";
        break;
      case 18:
        hexColor = "#A23A15";
        break;
      case 19:
        hexColor = "#9D3414";
        break;
      case 20:
        hexColor = "#983015";
        break;
      case 21:
        hexColor = "#932A14";
        break;
      case 22:
        hexColor = "#8D2615";
        break;
      case 23:
        hexColor = "#892515";
        break;
      case 24:
        hexColor = "#832212";
        break;
      case 25:
        hexColor = "#7D200F";
        break;
      case 26:
        hexColor = "#771E0E";
        break;
      case 27:
        hexColor = "#731C0B";
        break;
      case 28:
        hexColor = "#70180C";
        break;
      case 29:
        hexColor = "#6A160C";
        break;
      case 30:
        hexColor = "#67120B";
        break;
      case 31:
        hexColor = "#63100A";
        break;
      case 32:
        hexColor = "#5F0E0A";
        break;
      case 33:
        hexColor = "#5B0B0A";
        break;
      case 34:
        hexColor = "#58080B";
        break;
      case 35:
        hexColor = "#53080C";
        break;
      case 36:
        hexColor = "#4B090B";
        break;
      case 37:
        hexColor = "#470D0C";
        break;
      case 38:
        hexColor = "#400C0E";
        break;
      case 39:
        hexColor = "#3C0B0E";
        break;
      case 40:
        hexColor = "#983015";
        break;
      default:
        hexColor = "#240A0B";
    }
    setSrmColor(hexColor);

    return hexColor;
  };

  const onGlasswareClick = (text) => {
    const index = selectedGlasswares.indexOf(text);
    let array = [...selectedGlasswares];
    if (index === -1) {
      array = [...array, text];
    } else {
      array.splice(index, 1);
    }
    setSelectedGlasswares(array);
  };

  //  Declarative Objects

  const booleanOptions = [
    { label: "Yes", value: true },
    { label: "No", value: false },
  ];

  const availabilityOptions = [
    { label: "Year Round", value: "yearRound" },
    { label: "Seasonal or Limited", value: "limited" },
    { label: "Archived", value: "archived" },
  ];

  const allergyOptions = [
    { label: "Dairy", value: "dairy" },
    { label: "Nuts", value: "nuts" },
    { label: "Eggs", value: "eggs" },
    { label: "Gluten", value: "gluten" },
    { label: "None", value: "none" },
  ];

  const servingTempOptions = [
    { label: "Very Cold - (0-4C/32-39F)", value: "veryCold" },
    { label: "Cold - (4-7C/39-45F)", value: "cold" },
    { label: "Cool - (8-12C/45-54F)", value: "cool" },
    { label: "Cellar - (12-14C/54-57F)", value: "cellar" },
    { label: "Warm - (14-16C/57-61F)", value: "warm" },
    { label: "Hot - upto(70C/158F)", value: "hot" },
  ];

  console.log("srm color", srmColor);

  return (
    <React.Fragment>
      {showPrimaryFlavorPopup && (
        <PrimaryFlavorNotesPopup
          onCloseClick={() => setShowPrimaryFlavorPopup(false)}
          heading="Primary Flavor Notes"
          onSubmit={(array) => setSelectedPrimaryNotes(array)}
        />
      )}

      {showHintsPopup && (
        <PrimaryFlavorNotesPopup
          onCloseClick={() => setShowHintsPopup(false)}
          heading={<span>&#8220;Hints of&#8221; Flavor Notes</span>}
          onSubmit={(array) => setSelectedHintNotes(array)}
        />
      )}

      {showUploadLabelPopup && (
        <UploadLabelPopup
          onCloseClick={() => setShowUploadLabelPopup(false)}
          onSubmit={(file) => setLabelFile(file)}
        />
      )}

      <input
        style={{ display: "none" }}
        onChange={(e) => setLabelFile(e.target.files[0])}
        type="file"
        ref={labelInput}
      />

      <form className="productform__container">
        {/* Product Highlights Section */}
        <div className="productform__heading">Product Highlights</div>

        <div className="productform__section">
          <TextInput
            onChange={(value) => onChange("name", value)}
            label="Product Name"
            placeholder="Enter Product Name"
            value={productData.name}
            onBlue={() => validate()}
          />

          <SelectInput
            label="Is This a New Product"
            options={booleanOptions}
            onChange={(value) => {
              console.log("is new product", value);
              onChange("isNewProduct", value);
            }}
            value={productData.isNewProduct}
            placeholder="Yes or No"
          />
        </div>

        <div className="productform__section">
          <TextInput
            onChange={(value) => onChange("abv", value)}
            label="ABV"
            placeholder="Enter ABV"
            value={productData.abv}
          />
          <TextInput
            onChange={(value) => onChange("ibu", value)}
            label="IBU"
            placeholder="Enter IBU"
            value={productData.ibu}
          />
        </div>

        <div className="productform__section">
          <SelectInput
            value={productData.availability}
            label="Availability"
            options={availabilityOptions}
            onChange={(value) => onChange("availability", value)}
          />
          <div style={{ width: "45%" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "47px",
              }}
            >
              <label className="textinput__label">SRM</label>
              <div style={{ marginLeft: "20px" }}>
                <input
                  value={productData.srm}
                  onChange={(e) => onChange("srm", e.target.value)}
                  type="text"
                  className="productform__srm--input"
                />
                <span className="productform__srm--text-small">
                  Slide the circle or enter a number
                </span>
              </div>
            </div>

            <input
              type="range"
              min="1"
              max="40"
              class="productform__slider--srm"
              id="range-srm"
              value={productData.srm}
              onChange={(e) => {
                changeThumbColor(e.target.value);
                onChange("srm", e.target.value);
                decideSrmColor(e.target.value);
              }}
            />
            <span className="productform__srm--text-small">
              Changing SRM value changes the color of Glassware below.
            </span>
          </div>
        </div>

        <div className="productform__section">
          <SelectInput
            options={booleanOptions}
            value={productData.isGlutenFree}
            label="Gluten Free?"
            onChange={(value) => onChange("isGlutenFree", value)}
          />
          <SelectInput
            options={booleanOptions}
            value={productData.isOrganic}
            label="Certifies Organic?"
            onChange={(value) => onChange("isOrganic", value)}
          />
        </div>

        <div className="productform__section">
          <SelectInput
            options={booleanOptions}
            value={productData.isNonAlcoholic}
            label="Non-Alcoholic"
            onChange={(value) => onChange("isNonAlcoholic", value)}
          />
          <MultiSelectInput
            label="Allergy Warnings"
            options={allergyOptions}
            value={productData.allergyWarnings}
            onChange={(values) => {
              if (values.length > 1) {
                const index = values.indexOf("none");
                if (index !== -1) {
                  const array = [...values];
                  array.splice(index, 1);
                  return onChange("allergyWarnings", array);
                }
              }
              onChange("allergyWarnings", values);
            }}
          />
        </div>

        {/* Product Label Section */}
        <div className="productform__heading">Product Label</div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          {productData.label.length > 0 && (
            <img
              className="productform__img--label"
              src={productData.label}
              alt=""
            />
          )}

          {productData.label.length === 0 && labelFile && (
            <img
              className="productform__img--label"
              src={URL.createObjectURL(labelFile)}
              alt=""
            />
          )}

          {productData.label.length === 0 && !labelFile && (
            <div
              style={{
                backgroundColor: "#e9f1f8",
                border: "2px solid rgba(121, 173, 213, 0.2)",
                height: "80px",
              }}
              className="productform__img--label"
            />
          )}

          <div style={{ textAlign: "center" }}>
            <button
              type="button"
              onClick={() => setShowUploadLabelPopup(true)}
              className="productform__btn--logo"
            >
              Upload Logo
            </button>
            <span className="productform__upload--text">JPG, GIF or PNG</span>
          </div>
        </div>

        {/* Official Brewers Association Style */}
        <div style={{ marginBottom: "20px" }} className="productform__heading">
          Official Brewers Association Style{" "}
          <span style={{ color: "#ff0000" }}>*</span>
        </div>

        <TextInput
          onChange={(value) => onChange("associationStyle", value)}
          style={{ width: "90%" }}
          label=""
          value={productData.associationStyle}
        />

        <div className="productform__section">
          <TextInput
            label="Custom Style Name (optional)"
            placeholder="Enter Custom Style Name"
            style={{ width: "90%" }}
            onChange={(value) => onChange("customStyleName", value)}
            value={productData.customStyleName}
          />
        </div>

        {/* Tasting Notes */}
        <div className="productform__heading">Tasting Notes</div>

        <TextAreaInput
          style={{ width: "91%", marginTop: "20px" }}
          label="Describe the tasting experience"
          onChange={(value) => onChange("tasteDescription", value)}
          value={productData.tasteDescription}
        />

        {/* Percieved Bitterness */}
        {/* <div className="productform__heading">Percieved Bitterness</div>

        <span className="productform__bitternessslider--text">
          Slide the Hop to the Appropriate Percieved Bitterness
        </span> */}

        {/* <div style={{ position: "relative" }}>
          <input
            id="range-bitterness"
            type="range"
            className="productform__slider--bitterness"
            value={productData.bitterness}
            onChange={(e) => onChange("bitterness", e.target.value)}
          />

          <img
            src="https://w1.pngwing.com/pngs/698/1005/png-transparent-green-circle-herb-food-obat-tradisional-health-medicinal-plants-curcumin-extract-wang-noi-district-thailand-thumbnail.png"
            alt="flower"
            className="productform__slider--bitterness--flower"
            style={{ left: `${productData.bitterness}%` }}
          />

          <div className="productform__bitterness--text-range">
            <span>Low-to-no</span>
            <span>Mild</span>
            <span>Noticeable</span>
            <span>Decisive</span>
            <span>Powerful</span>
          </div>
        </div>
 */}
        {/* Primary Flavor Notes */}
        <div
          style={{ marginTop: "40px", marginBottom: "20px" }}
          className="productform__heading"
        >
          Primary Flavor Notes
        </div>

        <div style={{ display: "flex" }}>
          {selectedPrimaryNotes.map((note) => (
            <div className="productform__note--container">
              <img
                className="productform__note--img"
                src={`/images/flavor-notes/${note.url}.png`}
                alt=""
              />
              <span className="productform__note--name">{note.name}</span>
            </div>
          ))}
          <AddButton
            onClick={() => setShowPrimaryFlavorPopup(true)}
            text="Add another Primary Note"
          />
        </div>

        {/* Hints of Flavor Notes */}
        <div style={{ marginBottom: "20px" }} className="productform__heading">
          &#8220;Hints of&#8221; Flavor Notes
        </div>

        <div style={{ display: "flex" }}>
          {selectedHintNotes.map((note) => (
            <div className="productform__note--container">
              <img
                className="productform__note--img"
                src={`/images/flavor-notes/${note.url}.png`}
                alt=""
              />
              <span className="productform__note--name">{note.name}</span>
            </div>
          ))}
          <AddButton
            onClick={() => setShowHintsPopup(true)}
            text="Add another Note"
          />
        </div>

        {/* Product Description */}
        <div style={{ marginBottom: "20px" }} className="productform__heading">
          Product Description
        </div>
        <TextAreaInput
          style={{ width: "100%" }}
          label="Describe your Product"
          rows={10}
          placeholder="In 1902, Walter Bruhn, the son of German immigrants, created a recipe for a 
          new pilsener beer named Champagne Velvet. Over the next 50 years it grew 
          to become one of Indiana’s most popular beers, a go-to for many of our 
          grandparents and great-grandparents..."
          onChange={(value) => onChange("productDescription", value)}
          value={productData.productDescription}
        />

        {/* Recommendations */}
        <div className="productform__heading">Recommendations</div>

        <span
          style={{
            color: "var(--brew-logix-blue)",
            fontSize: "14px",
            marginTop: "20px",
            display: "block",
          }}
        >
          Glassware (Change SRM to change Glassware color)
        </span>

        <GlasswareList
          srmColor={srmColor}
          onGlasswareClick={onGlasswareClick}
          selectedGlasswares={selectedGlasswares}
        />

        {/* Serving Temperature and Food Pairings */}
        <div style={{ marginBottom: "20px" }} className="productform__heading">
          Serving Temperature and Food Pairings
        </div>

        <SelectInput
          style={{ width: "50%" }}
          label="Suggest Serving Temperature"
          options={servingTempOptions}
          value={productData.suggestedServingTemp}
          onChange={(value) => onChange("suggestedServingTemp", value)}
        />

        <TextInput
          style={{ marginTop: "40px", width: "50%" }}
          label="Suggest Appropriate Food Pairings"
          value={productData.suggestedFoodPairing}
          onChange={(value) => onChange("suggestedFoodPairing", value)}
        />

        <LightBlueButton
          style={{ marginTop: "20px" }}
          text="Add Another Pairing"
        />

        {/* Brewing Details */}
        <div style={{ marginTop: "20px" }} className="productform__heading">
          Brewing Details
        </div>

        <div className="productform__section">
          <div style={{ width: "45%" }}>
            <TextInput
              style={{ width: "100%", marginBottom: "20px" }}
              label="Yeasts"
              onChange={(value) => onChange("yeasts", value)}
              value={productData.yeasts}
            />
            <LightBlueButton text="Add Yeasts" />
          </div>

          <div style={{ width: "45%" }}>
            <TextInput
              style={{ width: "100%", marginBottom: "20px" }}
              label="Hops"
              onChange={(value) => onChange("hops", value)}
              value={productData.hops}
            />
            <LightBlueButton text="Add Hops" />
          </div>
        </div>

        <TextInput
          value={productData.malts}
          onChange={(value) => onChange("malts", value)}
          style={{ marginTop: "40px" }}
          label="Malts"
        />
        <LightBlueButton style={{ marginTop: "20px" }} text="Add Malts" />

        <div className="productform__outbtn--container">
          <LightBlueButton
            style={{ width: "217px", height: "50px", fontSize: "18px" }}
            text="Exit"
          />
          <LightBlueButton
            style={{
              width: "217px",
              height: "50px",
              fontSize: "18px",
              backgroundColor: "#799d4b",
            }}
            text="Save and Continue"
          />
        </div>
      </form>
    </React.Fragment>
  );
};

ProductForm.propTypes = {
  productData: PropTypes.object,
  onChange: PropTypes.func,
  setLabelFile: PropTypes.func,
  selectedPrimaryNotes: PropTypes.array,
  setSelectedPrimaryNotes: PropTypes.func,
  selectedHintNotes: PropTypes.array,
  setSelectedHintNotes: PropTypes.func,
  labelFile: PropTypes.any,
  selectedGlasswares: PropTypes.array,
  setSelectedGlasswares: PropTypes.func,
};

export default ProductForm;
