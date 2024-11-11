import React from 'react';
import Header from '../components/Header';
import '../styles/TalleresPage.css';

const TalleresPage = () => {
  return (
    <div className="talleres-container">
      <Header/>
      <h2>Lista de Talleres</h2>
      <p>Aquí puedes ver la lista de talleres disponibles.</p>
      
    </div>
  );
};

export default TalleresPage;
