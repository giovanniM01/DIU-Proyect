import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import OptionsPage from './pages/OptionsPage';
import GymPage from './pages/GymPage';
import ReservationPage from './pages/ReservationPage';
import SeleccionesPage from './pages/SeleccionesPage';
import TalleresPage from './pages/TalleresPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/options" element={<OptionsPage />} />
        <Route path="/gym" element={<GymPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/selecciones" element={<SeleccionesPage />} />
        <Route path="/talleres" element={<TalleresPage />} />
      </Routes>
    </Router>
  );
}

export default App;
