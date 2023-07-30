# QR Code Generator

This is a NextJS application that generates QR codes on the fly as the user enters data. The application supports different types of QR codes including URL, Wi-Fi, and SMS. The user can also specify a text caption that will be included under the QR code. The application uses the qr-code-styling library to generate the QR codes.

## Features

- Generate different types of QR codes: URL (default - https://pga.com), Wi-Fi, SMS
- Specify a text caption to be included under the QR code
- Select an image to be included in the QR code from a set of predefined images or upload your own
- Responsive design that works on both desktop and mobile devices

## Installation

1. Clone the repository
```
git clone https://github.com/your-repo/qr-code-generator.git
```

2. Navigate to the project directory
```
cd qr-code-generator
```

3. Install the dependencies
```
npm install
```

## Running the Application

1. Start the development server
```
npm run dev
```

2. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Select the type of QR code you want to generate (URL, Wi-Fi, SMS)
2. Enter the appropriate data based on the type of QR code
3. Specify a text caption (optional)
4. Select an image to be included in the QR code or upload your own
5. Click on the "Generate" button to generate the QR code

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)