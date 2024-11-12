import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Header from '../components/Header'; // Importa el Header
import '../styles/ReservationPage.css';

function ReservationPage() {
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const [reservedBlocks, setReservedBlocks] = useState([]);
  const [blockCapacities, setBlockCapacities] = useState({});
  const blocks = [
    '09:40 - 10:50', '11:05 - 12:15', '12:30 - 13:40', '14:40 - 15:50',
    '16:05 - 17:15', '17:30 - 18:40', '18:50 - 20:00', '20:15 - 21:25'
  ];
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  useEffect(() => {
    const capacities = {};
    days.forEach((day) => {
      blocks.forEach((time) => {
        capacities[`${day} ${time}`] = Math.floor(Math.random() * 15) + 1;
      });
    });
    setBlockCapacities(capacities);

    // Cargar reservas desde localStorage al iniciar la página
    const savedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
    setReservedBlocks(savedReservations);
  }, []);

  const handleBlockClick = (block) => {
    if (reservedBlocks.includes(block)) {
      // Si el bloque ya está reservado, no hacer nada
      return;
    }

    // Alternar selección de bloques, respetando el límite de 2 reservas en total
    if (selectedBlocks.includes(block)) {
      setSelectedBlocks(selectedBlocks.filter((b) => b !== block));
    } else {
      if (selectedBlocks.length + reservedBlocks.length < 2) {
        setSelectedBlocks([...selectedBlocks, block]);
      } else {
        alert('Solo puedes reservar hasta 2 bloques en total.');
      }
    }
  };

  const saveReservations = () => {
    if (selectedBlocks.length === 0) {
      alert('No has seleccionado ningún bloque para reservar.');
    } else {
      const newReservations = [...reservedBlocks, ...selectedBlocks];
      setReservedBlocks(newReservations);
      localStorage.setItem('reservations', JSON.stringify(newReservations));
      alert(`Has reservado: ${selectedBlocks.join(', ')}`);
      setSelectedBlocks([]); // Limpiar los bloques seleccionados después de reservar
    }
  };

  const isBlockSelected = (block) => selectedBlocks.includes(block);
  const isBlockReserved = (block) => reservedBlocks.includes(block);

  return (
    <div className="reservation-container">
      <Header />
      <BackButton />
      <h2 className="reservation-title">Reserva gimnasio III usm</h2>
      <table className="calendar-table">
        <thead>
          <tr>
            <th></th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {blocks.map((time) => (
            <tr key={time}>
              <td className="hour-cell">{time}</td>
              {days.map((day) => {
                const blockId = `${day} ${time}`;
                return (
                  <td
                    key={blockId}
                    className={`block ${
                      isBlockReserved(blockId)
                        ? 'reserved'
                        : isBlockSelected(blockId)
                        ? 'selected'
                        : 'available'
                    }`}
                    onClick={() => handleBlockClick(blockId)}
                    data-capacity={`${blockCapacities[blockId]}/15`}
                  >
                    <span className="default-text">
                      {isBlockReserved(blockId)
                        ? 'Reservado'
                        : isBlockSelected(blockId)
                        ? 'Seleccionado'
                        : 'Disponible'}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="instructions">
        <p>Selecciona tu bloque (max 2 en total)</p>
        <p>Haz clic en agendar</p>
      </div>
      <button className="agendar-button" onClick={saveReservations}>
        Agendar
      </button>
    </div>
  );
}

export default ReservationPage;
