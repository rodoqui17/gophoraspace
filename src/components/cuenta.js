import React, { useState, useEffect } from "react";
import "../App.css"
const CountdownTimer = () => {
  const targetDate = new Date("2023-10-24T00:00:00Z"); // Fecha de destino (11 de noviembre de 2023)
  const now = new Date();
  const timeDifference = targetDate - now; // Diferencia de tiempo en milisegundos

  const [countdown, setCountdown] = useState(timeDifference / 1000); // Convertir milisegundos a segundos

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countdown]);

  const days = Math.floor(countdown / (60 * 60 * 24));
  const hours = Math.floor((countdown % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((countdown % (60 * 60)) / 60);
  const seconds = Math.floor((countdown % 60));

  return (
    <div className="">
      
      <div className="countdown">
      
        <div className="countdown-item">
          <span className="countdown-number">{days}</span>
          <span className="countdown-label"> Días</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{hours}</span>
          <span className="countdown-label"> Horas</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{minutes}</span>
          <span className="countdown-label"> Minutos</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{seconds}</span>
          <span className="countdown-label"> Segundos</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
