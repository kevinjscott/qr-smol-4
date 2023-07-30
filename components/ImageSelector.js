import React, { useState } from 'react';
import Button from './Button';
import styles from '../styles/ImageSelector.module.css';

const ImageSelector = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState('pga_logo_1.png');

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    onImageSelect(image);
  };

  const handleImageUpload = (event) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
      onImageSelect(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div id="image-selector" className={styles.imageSelector}>
      <Button
        className={selectedImage === 'pga_logo_1.png' ? styles.selected : ''}
        onClick={() => handleImageSelect('pga_logo_1.png')}
        image="/images/pga_logo_1.png"
      />
      <Button
        className={selectedImage === 'pga_logo_2.png' ? styles.selected : ''}
        onClick={() => handleImageSelect('pga_logo_2.png')}
        image="/images/pga_logo_2.png"
      />
      <Button
        className={selectedImage === 'pga_logo_3.png' ? styles.selected : ''}
        onClick={() => handleImageSelect('pga_logo_3.png')}
        image="/images/pga_logo_3.png"
      />
      <Button
        className={selectedImage === 'None' ? styles.selected : ''}
        onClick={() => handleImageSelect('None')}
      >
        None
      </Button>
      <input
        id="upload-button"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
      <label htmlFor="upload-button">
        <Button
          className={selectedImage.includes('data:image') ? styles.selected : ''}
        >
          Upload
        </Button>
      </label>
    </div>
  );
};

export default ImageSelector;