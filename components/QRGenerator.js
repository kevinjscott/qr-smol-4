import React, { useState } from 'react';
import QRCode from './QRCode';
import QRInput from './QRInput';
import ImageSelector from './ImageSelector';

const QRGenerator = () => {
  const [qrData, setQrData] = useState({
    type: 'URL',
    data: 'https://pga.com',
    caption: '',
    image: '/images/pga_logo_1.png',
  });

  const handleInputChange = (type, data, caption) => {
    setQrData({ ...qrData, type, data, caption });
  };

  const handleImageSelect = (image) => {
    setQrData({ ...qrData, image });
  };

  return (
    <div className="qr-generator">
      <QRInput onInputChange={handleInputChange} />
      <ImageSelector onImageSelect={handleImageSelect} />
      <QRCode qrData={qrData} />
    </div>
  );
};

export default QRGenerator;