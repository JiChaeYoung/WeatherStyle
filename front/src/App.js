import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import UserPostPage from './pages/UserPostPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import UploadPage from './pages/UploadPage';
import SingupPage from './pages/SingupPage';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SingupPage />} />
        <Route path='/story' element={<MainPage />} />
        <Route path='/userpost' element={<UserPostPage />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/upload' element={<UploadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
