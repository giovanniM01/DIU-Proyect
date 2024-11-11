import React from 'react';
import { useNavigate } from 'react-router-dom';

function OptionsPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Opciones de Reservas</h2>
      <button onClick={() => navigate('/reservas')}>Realizar Reserva</button>
      <button onClick={() => alert('Función para cancelar reserva en desarrollo')}>
        Cancelar Reserva
      </button>
    </div>
  );
}

export default OptionsPage;
