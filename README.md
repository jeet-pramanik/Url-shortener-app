# URL Shortener Project

## Overview

[Visit the deployed application](https://url-shortener-git.vercel.app/shorten)

This project is a web-based URL shortener application. Users can enter a long URL and receive a shortened version that redirects to the original URL when accessed.

## Features

- **URL Shortening**: Converts long URLs into short, easy-to-share links.
- **Copy to Clipboard**: Users can copy the shortened URL with a single click.
- **Responsive Design**: Optimized for various screen sizes.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB (for storing URL mappings)
- **Deployment**: Vercel

## Installation

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/jeet-pramanik/url-shortener-app.git
   cd url-shortener-app
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file and add your MongoDB connection string:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Run the Application**:
   ```sh
   npm start
   ```

## Usage

1. Open the application in your browser.
2. Enter the URL you wish to shorten.
3. Click the "Shorten" button.
4. Copy the shortened URL and share it.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any questions or issues, please contact Jeet Pramanik at jeetpramanik516@gmail.com.
