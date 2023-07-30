import React, { useState } from 'react';

const QRInput = ({ handleInputChange }) => {
  const [qrType, setQrType] = useState('URL');
  const [inputData, setInputData] = useState('');
  const [caption, setCaption] = useState('');

  const handleTypeChange = (event) => {
    setQrType(event.target.value);
    handleInputChange(event.target.value, inputData, caption);
  };

  const handleDataChange = (event) => {
    setInputData(event.target.value);
    handleInputChange(qrType, event.target.value, caption);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
    handleInputChange(qrType, inputData, event.target.value);
  };

  return (
    <div id="input-fields">
      <label>
        QR Code Type:
        <select value={qrType} onChange={handleTypeChange}>
          <option value="URL">URL</option>
          <option value="Wi-Fi">Wi-Fi</option>
          <option value="SMS">SMS</option>
        </select>
      </label>
      <label>
        Input Data:
        <input type="text" value={inputData} onChange={handleDataChange} />
      </label>
      <label>
        Caption:
        <input type="text" value={caption} onChange={handleCaptionChange} />
      </label>
    </div>
  );
};

export default QRInput;