Shared Dependencies:

1. Exported Variables:
   - `QRCode`: Exported from `QRCode.js` and used in `QRGenerator.js` and `pages/index.js`.
   - `QRInput`: Exported from `QRInput.js` and used in `QRGenerator.js` and `pages/index.js`.
   - `ImageSelector`: Exported from `ImageSelector.js` and used in `QRGenerator.js` and `pages/index.js`.
   - `Button`: Exported from `Button.js` and used in `ImageSelector.js` and `pages/index.js`.

2. Data Schemas:
   - `QRData`: Used in `QRGenerator.js`, `QRCode.js`, `QRInput.js`, and `pages/api/generateQR.js`. It includes fields for QR code type, input data, caption, and selected image.

3. ID Names of DOM Elements:
   - `qr-code-container`: Used in `QRCode.js` and `QRGenerator.js` for rendering and manipulating the QR code.
   - `input-fields`: Used in `QRInput.js` and `QRGenerator.js` for handling user inputs.
   - `image-selector`: Used in `ImageSelector.js` and `QRGenerator.js` for image selection and preview.
   - `upload-button`: Used in `ImageSelector.js` and `QRGenerator.js` for handling image upload.

4. Message Names:
   - `generateQR`: Used in `pages/api/generateQR.js` and `QRGenerator.js` for generating the QR code.
   - `selectImage`: Used in `ImageSelector.js` and `QRGenerator.js` for handling image selection.

5. Function Names:
   - `generateQRCode`: Defined in `pages/api/generateQR.js` and used in `QRGenerator.js` for generating the QR code.
   - `handleInputChange`: Defined in `QRInput.js` and used in `QRGenerator.js` for handling user inputs.
   - `handleImageSelect`: Defined in `ImageSelector.js` and used in `QRGenerator.js` for handling image selection.
   - `handleImageUpload`: Defined in `ImageSelector.js` and used in `QRGenerator.js` for handling image upload.