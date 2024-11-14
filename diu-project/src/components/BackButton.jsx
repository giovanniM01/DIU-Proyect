// src/components/BackButton.jsx

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/BackButton.css';

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    // Condiciones para diferentes rutas
    if (location.pathname.includes('/deportes/')) {
      navigate('/selecciones');
    } 
    else if (location.pathname.includes('/selecciones')) {
      navigate('/options');}
     else if (location.pathname.includes('/talleres')) {
      navigate('/options');
    } 
    else if (location.pathname.includes('/gym-options')){navigate('/options');}
    else if (location.pathname.includes('/reservation')){navigate('/gym-options');}
    else if (location.pathname.includes('/cancel')){navigate('/gym-options');}
  };

  return (
    <button className="back-button" onClick={handleBackClick}>
      ←
    </button>
  );
};

export default BackButton;

