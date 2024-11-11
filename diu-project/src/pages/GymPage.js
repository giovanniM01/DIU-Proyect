import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GymPage.css';

const GymPage = () => {
  const navigate = useNavigate();

  return (
    <div className="gym-container">
      <h2>Reserva Gimnasio</h2>
      <button onClick={() => navigate('/reservation')} className="gym-button">Reservar</button>
      <button onClick={() => navigate('/cancelar')} className="gym-button">Cancelar Reserva</button>
    </div>
  );
};

export default GymPage;
