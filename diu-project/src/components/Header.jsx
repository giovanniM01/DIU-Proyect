import React from 'react';
import logoUSM from '../assets/logoUSM.png'; // Asegúrate de que esta ruta es correcta
import '../styles/Header.css'; // Estilos específicos para el header

const Header = () => {
  return (
    <div className="headerContainer">
      <img src={logoUSM} alt="Logo USM" className="logoUSM" />
      <h2 className="welcomeText">DEFIDER USM</h2>
    </div>
  );
};

export default Header;
