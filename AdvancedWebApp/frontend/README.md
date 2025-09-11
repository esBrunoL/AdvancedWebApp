# AdvancedWebApp Frontend

This project is a demonstration of a web application built using React.js, HTML, CSS, and JavaScript, showcasing user authentication with MongoDB and OAuth.

## Project Structure

The frontend of the application is organized as follows:

```
frontend
├── public
│   └── index.html          # Main HTML file for the React application
├── src
│   ├── App.js              # Main App component with routing
│   ├── index.js            # Entry point for the React application
│   ├── components          # Contains all React components
│   │   ├── HomePage.js     # Home page with Register, Login, and Cancel buttons
│   │   ├── RegisterPage.js  # Registration form component
│   │   ├── LoginPage.js     # Login form component
│   │   ├── UserCountPage.js  # Displays total registered users and project structure
│   │   └── SuccessPage.js    # Displays success message and thumbs up after login
│   ├── styles              # Contains CSS styles
│   │   └── main.css        # Main stylesheet for the application
│   └── utils               # Utility functions
│       └── auth.js         # Functions for handling authentication tokens
└── package.json            # npm configuration file
```

## Features

- **User Registration**: Users can register with a valid email, password, and personal information.
- **User Login**: Users can log in using their credentials to receive an authentication token.
- **User Count**: A page that displays the total number of registered users.
- **Responsive Design**: The application is styled with CSS to ensure a good user experience.

## Getting Started

To run the frontend application, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:
   ```
   cd AdvancedWebApp/frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.