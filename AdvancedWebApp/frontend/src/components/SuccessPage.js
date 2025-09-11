import React from 'react';
import './SuccessPage.css'; // Assuming you have a CSS file for styling

const SuccessPage = () => {
    return (
        <div className="success-container">
            <h1 className="success-message">Login Successful!</h1>
            <div className="thumbs-up">
                {/* Pixel art thumbs up can be added here as an image or SVG */}
                <img src="/path/to/thumbs-up-pixel-art.png" alt="Thumbs Up" />
            </div>
        </div>
    );
};

export default SuccessPage;