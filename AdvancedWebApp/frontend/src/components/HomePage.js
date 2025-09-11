import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();

    const handleRegister = () => {
        history.push('/register');
    };

    const handleLogin = () => {
        history.push('/login');
    };

    const handleCancel = () => {
        history.push('/user-count');
    };

    return (
        <div className="home-page">
            <h1>Welcome to Advanced Web App</h1>
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
};

export default HomePage;