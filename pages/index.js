import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import QRGenerator from '../components/QRGenerator';

export default function Home() {
  const [qrData, setQrData] = useState({
    type: 'URL',
    data: 'https://pga.com',
    caption: '',
    image: '/images/pga_logo_1.png',
  });

  const handleInputChange = (field, value) => {
    setQrData(prevState => ({ ...prevState, [field]: value }));
  };

  const handleImageSelect = (image) => {
    setQrData(prevState => ({ ...prevState, image }));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>QR Code Generator</title>
        <meta name="description" content="Generate QR codes on the fly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          QR Code Generator
        </h1>

        <QRGenerator
          qrData={qrData}
          onInputChange={handleInputChange}
          onImageSelect={handleImageSelect}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/your-github-handle/qr-code-generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code on GitHub
        </a>
      </footer>
    </div>
  );
}