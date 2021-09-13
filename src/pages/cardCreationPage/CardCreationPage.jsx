import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import HeadingBar from "../../components/headingBar/HeadingBar";
import ProductForm from "../../components/forms/productForm/ProductForm";
import ProductCard from "../../components/cards/productCard/ProductCard";
import LightBlueButton from "../../components/buttons/lightBlueButton/LightBlueButton";
import "./CardCreationPage.css";

import {
  setFormData,
  setLabelFileRedux,
  setPrimaryNotesRedux,
  setHintNotesRedux,
  setGlasswaresRedux
} from "../../redux/actions/cardCreation";

const CardCreationPage = props => {
  // States
  const [productData, setProductData] = useState(props.formData);

  const [labelFile, setLabelFile] = useState(props.labelFile);

  const [selectedPrimaryNotes, setSelectedPrimaryNotes] = useState(props.primaryNotes);

  const [selectedHintNotes, setSelectedHintNotes] = useState(props.hintNotes);

  const [selectedGlasswares, setSelectedGlasswares] = useState(props.glasswares);

  // Effects

  useEffect(() => {
    props.setFormData(productData);
  }, [props, productData]);

  useEffect(() => {
    props.setLabelFileRedux(labelFile);
  }, [labelFile]);

  useEffect(() => {
    props.setPrimaryNotesRedux(selectedPrimaryNotes);
  }, [selectedPrimaryNotes]);

  useEffect(() => {
    props.setHintNotesRedux(selectedHintNotes);
  }, [selectedHintNotes]);

  useEffect(() => {
    props.setGlasswaresRedux(selectedGlasswares);
  }, [selectedGlasswares]);

  const onChange = (name, value) => {
    const object = { ...productData, [name]: value };
    setProductData(object);
  };

  // Console Logs
  
  // console.log('props inside page', props);
  console.log("product data", productData);

  return (
    <div className="cardcreationpage__page">
      <Navbar />
      <HeadingBar />

      <div className="cardcreationsection__section--logos">
        <img
          src="/images/logo-2x.png"
          alt=""
          className="cardcreationsection__img--logo"
        />
        <img
          className="cardcreationsection__img--promote"
          src="/images/BreweryDB_PromoteProducts@2x.png"
          alt=""
        />
      </div>

      <div className="cardcreationpage__heading--product">Your Product</div>

      <div className="cardcreationpage__section--main">
        <div className="cardcreationpage__section--form">
          <ProductForm
            productData={productData}
            onChange={onChange}
            labelFile={labelFile}
            setLabelFile={setLabelFile}
            selectedPrimaryNotes={selectedPrimaryNotes}
            setSelectedPrimaryNotes={setSelectedPrimaryNotes}
            selectedHintNotes={selectedHintNotes}
            setSelectedHintNotes={setSelectedHintNotes}
            selectedGlasswares={selectedGlasswares}
            setSelectedGlasswares={setSelectedGlasswares}
          />
        </div>

        <ProductCard
          productData={productData}
          selectedPrimaryNotes={selectedPrimaryNotes}
          selectedHintNotes={selectedHintNotes}
          labelFile={labelFile}
        />
      </div>

    </div>
  );
};

const mapStateToProps = state => ({
  formData: state.productData,
  primaryNotes: state.primaryNotes,
  hintNotes: state.hintNotes,
  glasswares: state.glasswares,
  labelFile: state.labelFile,

});

export default connect(mapStateToProps, {
  setFormData,
  setPrimaryNotesRedux,
  setHintNotesRedux,
  setGlasswaresRedux,
  setLabelFileRedux
})(CardCreationPage);
