import React, { useState } from 'react';

function ReservationPage() {
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const blocks = ['9:40 - 10:50', '11:05 - 12:15', '12:30 - 13:40', '14:40 - 15:50', '16:05 - 17:15'];

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

  const handleConfirm = () => {
    if (selectedBlocks.length > 0) {
      alert(`Has reservado los bloques: ${selectedBlocks.join(', ')}`);
    } else {
      alert('Selecciona al menos un bloque para reservar.');
    }
  };

  return (
    <div>
      <h2>Calendario de Reservas</h2>
      <div>
        {blocks.map((block) => (
          <div key={block}>
            <button
              onClick={() => handleBlockClick(block)}
              style={{
                backgroundColor: selectedBlocks.includes(block) ? 'green' : 'lightgray',
              }}
            >
              {block}
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleConfirm}>Confirmar Reserva</button>
    </div>
  );
}

export default ReservationPage;
