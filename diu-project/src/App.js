import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import OptionsPage from './pages/OptionsPage';
import ReservationPage from './pages/ReservationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/options" element={<OptionsPage />} />
        <Route path="/reservas" element={<ReservationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
