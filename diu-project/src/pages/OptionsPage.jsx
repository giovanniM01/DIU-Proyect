import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'; // Importa el Header
import '../styles/OptionsPage.css';

const OptionsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="options-container">
      <Header /> {/* Esto muestra el logo y texto en la esquina superior */}
      <h2 class="areas">Areas DEFIDER</h2>
      <button onClick={() => navigate('/gym-options')} className="option-button">Gimnasio III </button>
      <button onClick={() => navigate('/selecciones')} className="option-button">Selecciones Deportivas</button>
      <button onClick={() => navigate('/talleres')} className="option-button">Talleres</button>
    </div>
  );
};

export default OptionsPage;
