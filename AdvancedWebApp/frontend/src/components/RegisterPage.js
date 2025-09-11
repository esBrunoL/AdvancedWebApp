import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [givenName, setGivenName] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const validateForm = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        const phonePattern = /^\+?[1-9]\d{1,14}$/; // Example pattern for international phone numbers

        if (!emailPattern.test(userId)) {
            return 'Invalid email address.';
        }
        if (!passwordPattern.test(password)) {
            return 'Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one digit.';
        }
        if (!givenName || !familyName) {
            return 'Given name and family name are required.';
        }
        if (!phonePattern.test(phoneNumber)) {
            return 'Invalid phone number format.';
        }
        return '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        const userData = { userId, password, givenName, familyName, phoneNumber };

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                history.push('/'); // Redirect to home page on success
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Registration failed.');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={userId} onChange={(e) => setUserId(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>Given Name:</label>
                    <input type="text" value={givenName} onChange={(e) => setGivenName(e.target.value)} required />
                </div>
                <div>
                    <label>Family Name:</label>
                    <input type="text" value={familyName} onChange={(e) => setFamilyName(e.target.value)} required />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                </div>
                <button type="submit">Submit</button>
                <button type="button" onClick={() => history.push('/')}>Cancel</button>
            </form>
        </div>
    );
};

export default RegisterPage;