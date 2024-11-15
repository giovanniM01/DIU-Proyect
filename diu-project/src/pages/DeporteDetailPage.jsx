// src/pages/DeporteDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import deportesData from '../components/deportesData';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import '../styles/DeporteDetailPage.css';

const normalizeString = (str) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const DeporteDetailPage = () => {
  const { deporteId } = useParams();
  const deporte = deportesData[normalizeString(deporteId)];

  if (!deporte) {
    return <p>Deporte no encontrado.</p>;
  }

  return (
    <div className="deporte-detail-page">
      <Header />
      <BackButton />
      <h2 className="nombre-deporte">{deporte.nombre}</h2>
      <p>{deporte.descripcion}</p>
      <h3>Categorías</h3>
      <ul>
        {deporte.categorias?.map((categoria, index) => (
          <li key={index}>{categoria}</li>
        ))}
      </ul>
      <h3>Campus y Profesores</h3>
      {deporte.campus?.map((campus, index) => (
        <div key={index} className="campus-section">
          <h4>{campus}</h4>
          <p>Profesor: {deporte.profesores?.[campus]}</p>
          <p>Recinto: {deporte.recintos?.[campus]}</p>
          <p>Horarios:</p>
          <ul>
            {deporte.horarios?.[campus] ? (
              Object.entries(deporte.horarios[campus]).map(([dia, horario], idx) => (
                <li key={idx}>{dia}: {horario}</li>
              ))
            ) : (
              <li>No hay horarios disponibles.</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DeporteDetailPage;
