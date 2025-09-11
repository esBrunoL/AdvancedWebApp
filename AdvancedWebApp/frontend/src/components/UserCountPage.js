import React from 'react';

const UserCountPage = () => {
    const [userCount, setUserCount] = React.useState(0);

    React.useEffect(() => {
        // Fetch the user count from the backend API
        const fetchUserCount = async () => {
            try {
                const response = await fetch('/api/users/count');
                const data = await response.json();
                setUserCount(data.count);
            } catch (error) {
                console.error('Error fetching user count:', error);
            }
        };

        fetchUserCount();
    }, []);

    return (
        <div>
            <h1>User Count</h1>
            <p>Total registered users: {userCount}</p>
            <h2>Project Structure</h2>
            <pre>
                {`AdvancedWebApp
├── backend
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── advancedwebapp
│   │   │   │           ├── Application.java
│   │   │   │           ├── controller
│   │   │   │           │   └── AuthController.java
│   │   │   │           ├── model
│   │   │   │           │   └── User.java
│   │   │   │           ├── repository
│   │   │   │           │   └── UserRepository.java
│   │   │   │           └── service
│   │   │   │               └── AuthService.java
│   │   │   └── resources
│   │   │       └── application.properties
│   ├── pom.xml
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components
│   │   │   ├── HomePage.js
│   │   │   ├── RegisterPage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── UserCountPage.js
│   │   │   └── SuccessPage.js
│   │   ├── styles
│   │   │   └── main.css
│   │   └── utils
│   │       └── auth.js
│   ├── package.json
│   └── README.md
├── README.md`}
            </pre>
        </div>
    );
};

export default UserCountPage;