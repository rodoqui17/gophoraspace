import React from 'react';
import "../App.css"
const Tarjeta = ({ titulo, descripcion, imagenURL }) => {
  return (
    <div className="tarjeta">
      <img src={imagenURL} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </div>
  );
};

export default Tarjeta;