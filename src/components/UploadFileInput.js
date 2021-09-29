import React from "react";

const UploadFileInput = ({text, id, img, accept, addClass, onChange}) => {
  return (
    <div className={`upload-file ${addClass}`}>
      <input
        onChange={onChange}
        className="upload-file__input"
        accept={accept}
        type="file"
        id={id}
      />
      <label className="upload-file__label" htmlFor={id}>
        {img ? <img src={img} alt="img" /> : <span>{text}</span>}
      </label>
    </div>
  );
};

export default UploadFileInput;
