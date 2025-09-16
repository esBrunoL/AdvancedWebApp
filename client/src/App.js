import React from 'react';
import './App.css';

function App() {
  const handleCancel = () => {
    window.location.href = 'https://www.google.ca';
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Advanced Web Development - Bruno Lobo</h1>
      <button onClick={() => window.location.href = '/register'}>Register</button>
      <button onClick={() => window.location.href = '/login'}>Login</button>
      <button onClick={() => window.location.href = '/login'}>Cancel</button>
    </div>
  );
}

export default App;
