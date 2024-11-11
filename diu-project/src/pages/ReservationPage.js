import React, { useState, useEffect } from 'react';
import '../styles/ReservationPage.css';

function ReservationPage() {
  const [selectedBlocks, setSelectedBlocks] = useState([]);
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
  }, []);

  const handleBlockClick = (block) => {
    if (selectedBlocks.includes(block)) {
      setSelectedBlocks(selectedBlocks.filter((b) => b !== block));
    } else {
      if (selectedBlocks.length < 2) {
        setSelectedBlocks([...selectedBlocks, block]);
      } else {
        alert('Solo puedes seleccionar hasta 2 bloques.');
      }
    }
  };

  const isBlockSelected = (block) => selectedBlocks.includes(block);

  return (
    <div className="reservation-container">
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
              <td className="hour-cell">{time}</td> {/* Añadir clase hour-cell */}
              {days.map((day) => {
                const blockId = `${day} ${time}`;
                return (
                  <td
                    key={blockId}
                    className={`block ${isBlockSelected(blockId) ? 'selected' : 'available'}`}
                    onClick={() => handleBlockClick(blockId)}
                    data-capacity={`${blockCapacities[blockId]}/15`}
                  >
                    <span className="default-text">{isBlockSelected(blockId) ? 'Seleccionado' : 'Disponible'}</span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="instructions">
        <p>Selecciona tu bloque (max 2)</p>
        <p>Haz clic en agendar</p>
      </div>
      <button className="agendar-button" onClick={() => alert(`Has reservado: ${selectedBlocks.join(', ')}`)}>
        Agendar
      </button>
    </div>
  );
}

export default ReservationPage;
