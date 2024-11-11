import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OptionsPage.css';

const OptionsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="options-container">
      <h2>Opciones</h2>
      <button onClick={() => navigate('/gym-options')} className="option-button">Gimnasio</button>
      <button onClick={() => navigate('/selecciones')} className="option-button">Seleccionados</button>
      <button onClick={() => navigate('/talleres')} className="option-button">Talleres</button>
    </div>
  );
};

export default OptionsPage;
