// src/pages/SeleccionesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import DeporteCard from '../components/DeporteCard';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import '../styles/SeleccionesPage.css';

// Importa todas las imágenes
import atletismoImg from '../images/atletismo.jpg';
import ajedrezImg from '../images/ajedrez.jpg';
import balonmanoImg from '../images/balonmanos.jpg';
import basquetbolImg from '../images/basquetbol.jpg';
import futbolImg from '../images/futbol.jpg';
import karateImg from '../images/karate.jpg';
import natacionImg from '../images/natacion.jpg';
import rugbyImg from '../images/rubgy.jpg';
import taekwondoImg from '../images/taekwondo.jpg';
import tenisImg from '../images/tenis.jpg';
import tenisMesaImg from '../images/tenismesa.jpg';
import voleibolImg from '../images/voleibol.jpg';
import futsalImg from '../images/futsal1.png';

const deportes = [
  { nombre: 'Atletismo', descripcion: 'Deporte Individual', categoria: 'Individual', id: 'atletismo', imagen: atletismoImg },
  { nombre: 'Ajedrez', descripcion: 'Deporte Individual', categoria: 'Individual', id: 'ajedrez', imagen: ajedrezImg },
  { nombre: 'Balonmano', descripcion: 'Deporte Colectivo', categoria: 'Colectivo', id: 'balonmano', imagen: balonmanoImg },
  { nombre: 'Basquetbol', descripcion: 'Deporte Colectivo', categoria: 'Colectivo', id: 'basquetbol', imagen: basquetbolImg },
  { nombre: 'Futbol', descripcion: 'Deporte Colectivo', categoria: 'Colectivo', id: 'futbol', imagen: futbolImg },
  { nombre: 'Karate', descripcion: 'Deporte de Contacto', categoria: 'Contacto', id: 'karate', imagen: karateImg },
  { nombre: 'Natación', descripcion: 'Deporte Individual', categoria: 'Individual', id: 'natacion', imagen: natacionImg },
  { nombre: 'Rugby', descripcion: 'Deporte Colectivo', categoria: 'Colectivo', id: 'rugby', imagen: rugbyImg },
  { nombre: 'Taekwondo', descripcion: 'Deporte de Contacto', categoria: 'Contacto', id: 'taekwondo', imagen: taekwondoImg },
  { nombre: 'Tenis', descripcion: 'Deporte Individual', categoria: 'Individual', id: 'tenis', imagen: tenisImg },
  { nombre: 'Tenis de Mesa', descripcion: 'Deporte Individual', categoria: 'Individual', id: 'tenis_de_mesa', imagen: tenisMesaImg },
  { nombre: 'Voleibol', descripcion: 'Deporte Colectivo', categoria: 'Colectivo', id: 'voleibol', imagen: voleibolImg },
  { nombre: 'Futsal', descripcion: 'Deporte Colectivo', categoria: 'Colectivo', id: 'futsal', imagen: futsalImg },
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
              imagen={deporte.imagen} 
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SeleccionesPage;
