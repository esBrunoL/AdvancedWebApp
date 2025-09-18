import React, { useState } from 'react';

function DiscussionBoard() {
  const handleCancel = () => {
    window.location.href = 'https://www.google.ca';
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Discussion Board: </h1>
      <button onClick={() => window.location.href = '/register'}>Register</button>
      <button onClick={() => window.location.href = '/login'}>Login</button>
      <button onClick={() => handleCancel()}>Cancel</button>
    </div>
  );
}

export default DiscussionBoard;