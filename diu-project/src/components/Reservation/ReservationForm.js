import React from 'react';

function ReservationForm() {
  return (
    <div>
      <h2>Formulario de Reserva</h2>
      <form>
        <label>
          Correo Institucional:
          <input type="email" name="email" />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ReservationForm;
