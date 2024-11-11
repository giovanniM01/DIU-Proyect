import React, { useState, useEffect } from 'react';
import '../styles/CancelPage.css';

const CancelPage = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const savedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
    setReservations(savedReservations);
  }, []);

  const handleCancel = (reservation) => {
    if (window.confirm(`¿Estás seguro de que deseas cancelar la reserva: ${reservation}?`)) {
      const updatedReservations = reservations.filter((res) => res !== reservation);
      setReservations(updatedReservations);
      localStorage.setItem('reservations', JSON.stringify(updatedReservations));
    }
  };

  return (
    <div className="cancel-container">
      <h2>Tus Reservas</h2>
      {reservations.length > 0 ? (
        reservations.map((reservation, index) => (
          <div key={index} className="reservation-item">
            <span>{reservation}</span>
            <button className="cancel-button" onClick={() => handleCancel(reservation)}>Cancelar</button>
          </div>
        ))
      ) : (
        <p>No tienes reservas actuales.</p>
      )}
    </div>
  );
};

export default CancelPage;
