// src/components/DeporteCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DeporteCard.css';

const normalizeString = (str) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const DeporteCard = ({ nombre, descripcion, categoria,imagen}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/deportes/${normalizeString(nombre)}`);
  };

  
  return (
    <div
      className="deporte-card"
      onClick={handleClick}
      style={{
        backgroundImage: `url(${imagen})`, 
        backgroundSize: 'cover',           
        backgroundPosition: 'center',       
      }}
    >
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <span className="categoria">{categoria}</span>
    </div>
  );
};

export default DeporteCard;
