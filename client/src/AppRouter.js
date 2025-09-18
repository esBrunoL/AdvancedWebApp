import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Register from './Register';
import Login from './Login';
import DiscussionBoard from './DiscussionBoard';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/DiscussionBoard" element={<DiscussionBoard />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
