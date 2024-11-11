// src/pages/SeleccionesPage.js
import React from 'react';
import DeporteCard from '../components/DeporteCard';
import Header from '../components/Header';
import '../styles/SeleccionesPage.css';

const deportes = [
  { nombre: 'Atletismo', descripcion: 'Deporte Individual', categoria: 'Individual' },
  { nombre: 'Ajedrez', descripcion: 'Deporte Individual', categoria: 'Individual' },
  { nombre: 'Balonmano', descripcion: 'Deporte Colectivo', categoria: 'Colectivo' },
  { nombre: 'Básquetbol', descripcion: 'Deporte Colectivo', categoria: 'Colectivo' },
  { nombre: 'Fútbol', descripcion: 'Deporte Colectivo', categoria: 'Colectivo' },
  { nombre: 'Karate', descripcion: 'Deporte de Contacto', categoria: 'Contacto' },
  { nombre: 'Natación', descripcion: 'Deporte Individual', categoria: 'Individual' },
  { nombre: 'Rugby', descripcion: 'Deporte Colectivo', categoria: 'Colectivo' },
  { nombre: 'Taekwondo', descripcion: 'Deporte de Contacto', categoria: 'Contacto' },
  { nombre: 'Tenis', descripcion: 'Deporte Individual', categoria: 'Individual' },
  { nombre: 'Tenis de Mesa', descripcion: 'Deporte Individual', categoria: 'Individual' },
  { nombre: 'Vóleibol', descripcion: 'Deporte Colectivo', categoria: 'Colectivo' },
  { nombre: 'Futsal', descripcion: 'Deporte Colectivo', categoria: 'Colectivo' },
];

const SeleccionesPage = () => {
  return (
    <div className="selecciones-page">
      <Header />
      <h2>Selecciones Deportivas</h2>
      <p className="intro-text">
        El Área de Deporte del DEFIDER es la encargada de planificar, coordinar, ejecutar y evaluar las selecciones deportivas,
        siendo éstas una opción de participación voluntaria y encargadas de representar a la Universidad en los diferentes 
        escenarios del deporte competitivo a nivel regional, nacional e internacional.
      </p>
      <div className="deportes-list">
        {deportes.map((deporte, index) => (
          <DeporteCard
            key={index}
            nombre={deporte.nombre}
            descripcion={deporte.descripcion}
            categoria={deporte.categoria}
          />
        ))}
      </div>
    </div>
  );
};

export default SeleccionesPage;
