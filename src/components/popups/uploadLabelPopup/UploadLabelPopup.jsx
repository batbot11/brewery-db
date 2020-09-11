import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import "./UploadLabelPopup.css";

const UploadLabelPopup = ({ onCloseClick, onSubmit }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);


  const onDrop = useCallback(acceptedFiles => {
    console.log("accepted files", acceptedFiles);
    setUploadedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  console.log("uploaded file", uploadedFile);

  return (
    <React.Fragment>
      <div className="primaryflavornotespopup__disabled" />

      <div
        style={{ paddingBottom: "43px" }}
        className="primaryflavornotespopup__container"
      >
        <div className="primaryflavornotespopup__heading">Upload Label</div>

        <img
          onClick={() => onCloseClick()}
          src="/images/close.png"
          className="primaryflavornotespopup__icon--close"
          alt=""
        />

        <div
          style={{ display: "flex", paddingBottom: '20px' }}
          className="primaryflavornotespopup__main"
        >
          <div className="uploadlabelpopup__dropzone" {...getRootProps()}>
            <input {...getInputProps()} />

            <img
              className="uploadlabelpopup__img--upload"
              src="/images/upload@2x.png"
              alt=""
            />

            <button className="uploadlabelpopup__btn--browse">
              Browse Files
            </button>

            <div
              style={{ left: "50%", transform: "translateX(-50%)", top: "60%" }}
              className="uploadlabelpopup__text"
            >
              or
            </div>

            <div
              style={{
                left: "50%",
                transform: "translateX(-50%)",
                top: "70%",
                width: "100%",
                fontSize: "14px",
                textAlign: "center"
              }}
              className="uploadlabelpopup__text"
            >
              simply drag and drop your logo here.
            </div>

            <span
              style={{
                fontSize: "12px",
                left: "50%",
                transform: "translateX(-50%)",
                bottom: "10px"
              }}
              className="uploadlabelpopup__text"
            >
              Max File Size 2MB
            </span>
          </div>

          <div style={{ marginLeft: "5%" }}>
            <span
              style={{ fontSize: "16px", fontWeight: 400 }}
              className="uploadlabelpopup__text"
            >
              {uploadedFile ? 'Uploaded' : 'Upload a File'}
            </span>

            {uploadedFile && (
              <div className="uploadlabelpopup__file--naming">
                <div className="uploadlabelpopup__check--container">
                  {" "}
                  &#10004;
                </div>
                <span className="uploadlabelpopup__text--filename">
                  {uploadedFile.name.substr(0, 20)}{" "}
                  {uploadedFile.name.length > 20 && ". . ."}
                </span>
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => {
              onSubmit(uploadedFile);
              onCloseClick();
            }}
            className="primaryflavornotespopup__btn--finish"
          >
            Upload
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

UploadLabelPopup.propTypes = {
  onCloseClick: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default UploadLabelPopup;
