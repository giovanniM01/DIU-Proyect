import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../styles/CancelPage.css';

function CancelPage() {
  const [reservedBlocks, setReservedBlocks] = useState([]);

  useEffect(() => {
    const savedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
    setReservedBlocks(savedReservations);
  }, []);

  const cancelReservation = (block) => {
    const updatedReservations = reservedBlocks.filter((b) => b !== block);
    setReservedBlocks(updatedReservations);
    localStorage.setItem('reservations', JSON.stringify(updatedReservations));
    alert(`La reserva para el bloque ${block} ha sido cancelada.`);
  };

  return (
    <div className="cancel-container">
      <Header />
      <h2 className="cancel-title">Cancelar Reservas</h2>
      <div className="reservations-list">
        {reservedBlocks.length > 0 ? (
          reservedBlocks.map((block, index) => (
            <div key={index} className="reservation-item">
              <span>{block}</span>
              <button onClick={() => cancelReservation(block)} className="cancel-button">
                Cancelar
              </button>
            </div>
          ))
        ) : (
          <p>No tienes reservas actuales.</p>
        )}
      </div>
    </div>
  );
}

export default CancelPage;
