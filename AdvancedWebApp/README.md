# AdvancedWebApp

AdvancedWebApp is a demonstration project that showcases the use of authentication tokens in a web application built with HTML, CSS, JavaScript, and Java, utilizing MongoDB, OAuth, and React.js.

## Project Structure

The project is divided into two main parts: the backend and the frontend.

### Backend

The backend is built using Java with Spring Boot and includes the following components:

- **Application.java**: The entry point of the Java application that initializes the Spring Boot application.
- **AuthController.java**: Handles HTTP requests for user registration and login.
- **User.java**: Represents the user entity with properties such as userId, password, givenName, familyName, and phoneNumber.
- **UserRepository.java**: Interface for performing CRUD operations on User entities.
- **AuthService.java**: Contains business logic for user registration and authentication.
- **application.properties**: Configuration settings for the Spring Boot application, including database connection details.
- **pom.xml**: Maven configuration file listing the dependencies required for the backend application.

### Frontend

The frontend is built using React.js and includes the following components:

- **index.html**: The main HTML file that serves as the entry point for the React application.
- **App.js**: The main App component that sets up routing and renders the appropriate components.
- **HomePage.js**: Displays the initial page with Register, Login, and Cancel buttons.
- **RegisterPage.js**: Contains the registration form and handles user input validation.
- **LoginPage.js**: Contains the login form and handles authentication.
- **UserCountPage.js**: Displays the total number of registered users and the project structure.
- **SuccessPage.js**: Displays a success message and a pixel art thumbs up after successful login.
- **main.css**: CSS styles for the React application.
- **auth.js**: Utility functions for handling authentication, including storing and retrieving authentication tokens.
- **package.json**: Configuration file for npm, listing dependencies and scripts for the frontend application.

## Getting Started

To get started with the project, clone the repository and navigate to the backend and frontend directories to set up and run the respective applications.

### Prerequisites

- Java Development Kit (JDK)
- Node.js and npm
- MongoDB

### Installation

1. **Backend**:
   - Navigate to the `backend` directory.
   - Run `mvn install` to install the necessary dependencies.
   - Configure the `application.properties` file with your MongoDB connection details.
   - Run the application using `mvn spring-boot:run`.

2. **Frontend**:
   - Navigate to the `frontend` directory.
   - Run `npm install` to install the necessary dependencies.
   - Start the React application using `npm start`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.