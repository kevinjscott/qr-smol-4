import { NextApiRequest, NextApiResponse } from 'next';
import QRCodeStyling from 'qr-code-styling';

export default async function generateQR(req: NextApiRequest, res: NextApiResponse) {
  const { type, data, caption, image } = req.body;

  let qrData;
  switch (type) {
    case 'URL':
      qrData = data || 'https://pga.com';
      break;
    case 'Wi-Fi':
      qrData = `WIFI:T:${data.ssid};S:${data.password};H:${data.isHidden};`;
      break;
    case 'SMS':
      qrData = `SMSTO:${data.number}:${data.message}`;
      break;
    default:
      qrData = 'https://pga.com';
  }

  const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    data: qrData,
    image: image,
    dotsOptions: {
      color: "#4267b2",
      type: "rounded"
    },
    backgroundOptions: {
      color: "#e9ebee",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 20
    }
  });

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  qrCode.append(canvas);

  if (caption) {
    ctx.font = '20px Arial';
    ctx.fillText(caption, canvas.width / 2, canvas.height - 10);
  }

  const qrCodeDataUrl = canvas.toDataURL('image/png');
  res.status(200).json({ qrCodeDataUrl });
}