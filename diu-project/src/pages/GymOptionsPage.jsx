import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import '../styles/GymOptionsPage.css';

const GymOptionsPage = () => {
  const navigate = useNavigate();

  return (
    
    <div className="gym-options-container">
      <Header/>
      <BackButton />
      <h2>Gimnasio III USM</h2>
      <button onClick={() => navigate('/reservation')} className="gym-option-button">Reservar bloque</button>
      <button onClick={() => navigate('/cancel')} className="gym-option-button">Cancelar reserva</button>
    </div>
  );
};

export default GymOptionsPage;
