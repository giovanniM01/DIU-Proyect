// src/components/DeporteCard.js
import React from 'react';
import './DeporteCard.css';

const DeporteCard = ({ nombre, descripcion, categoria }) => {
  return (
    <div className="deporte-card">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <span className="categoria">{categoria}</span>
    </div>
  );
};

export default DeporteCard;
