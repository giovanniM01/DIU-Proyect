// src/pages/SeleccionesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import DeporteCard from '../components/DeporteCard';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import '../styles/SeleccionesPage.css';

const deportes = [
  { nombre: 'Atletismo', descripcion: 'Deporte Individual', categoria: 'Individual', id: 'atletismo' },
  { nombre: 'Ajedrez', descripcion: 'Deporte Individual', categoria: 'Individual', id: 'ajedrez' },
  { nombre: 'Balonmano', descripcion: 'Deporte Colectivo', categoria: 'Colectivo', id: 'balonmano' },
  { nombre: 'Basquetbol', descripcion: 'Deporte Colectivo', categoria: 'Colectivo', id: 'basquetbol' },
  { nombre: 'Futbol', descripcion: 'Deporte Colectivo', categoria: 'Colectivo', id: 'futbol' },
  { nombre: 'Karate', descripcion: 'Deporte de Contacto', categoria: 'Contacto', id: 'karate' },
  { nombre: 'Natación', descripcion: 'Deporte Individual', categoria: 'Individual', id: 'natacion' },
  { nombre: 'Rugby', descripcion: 'Deporte Colectivo', categoria: 'Colectivo', id: 'rugby' },
  { nombre: 'Taekwondo', descripcion: 'Deporte de Contacto', categoria: 'Contacto', id: 'taekwondo' },
  { nombre: 'Tenis', descripcion: 'Deporte Individual', categoria: 'Individual', id: 'tenis' },
  { nombre: 'Tenis de Mesa', descripcion: 'Deporte Individual', categoria: 'Individual', id: 'tenis_de_mesa' },
  { nombre: 'Voleibol', descripcion: 'Deporte Colectivo', categoria: 'Colectivo', id: 'voleibol' },
  { nombre: 'Futsal', descripcion: 'Deporte Colectivo', categoria: 'Colectivo', id: 'futsal' },
];

const SeleccionesPage = () => {
  return (
    <div className="selecciones-page">
      <Header />
      <BackButton />
      <h2>Selecciones Deportivas</h2>
      <p className="intro-text">
        El Área de Deporte del DEFIDER es la encargada de planificar, coordinar, ejecutar y evaluar las selecciones deportivas,
        siendo éstas una opción de participación voluntaria y encargadas de representar a la Universidad en los diferentes 
        escenarios del deporte competitivo a nivel regional, nacional e internacional.
      </p>
      <div className="deportes-list">
        {deportes.map((deporte, index) => (
          <Link to={`/deportes/${deporte.id}`} key={index} style={{ textDecoration: 'none' }}>
            <DeporteCard
              nombre={deporte.nombre}
              descripcion={deporte.descripcion}
              categoria={deporte.categoria}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SeleccionesPage;
