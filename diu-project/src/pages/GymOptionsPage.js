import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'; // Importa el Header
import '../styles/GymOptionsPage.css';

const GymOptionsPage = () => {
  const navigate = useNavigate();

  return (
    
    <div className="gym-options-container">
      <Header/>
      <h2>Gimnasio - Opciones</h2>
      <button onClick={() => navigate('/reservation')} className="gym-option-button">Reservar</button>
      <button onClick={() => navigate('/cancel')} className="gym-option-button">Cancelar</button>
    </div>
  );
};

export default GymOptionsPage;