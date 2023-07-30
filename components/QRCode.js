import React, { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';
import styles from '../styles/QRCode.module.css';

const QRCode = ({ qrData }) => {
  const qrCodeRef = useRef(null);

  useEffect(() => {
    const qrCode = new QRCodeStyling({
      width: 200,
      height: 200,
      data: qrData.data,
      image: qrData.image,
      dotsOptions: {
        color: '#4267b2',
        type: 'rounded'
      },
      backgroundOptions: {
        color: '#e9ebee',
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 20
      }
    });

    qrCode.append(qrCodeRef.current);
  }, [qrData]);

  return (
    <div className={styles.qrCodeContainer} ref={qrCodeRef}>
      <p className={styles.caption}>{qrData.caption}</p>
    </div>
  );
};

export default QRCode;