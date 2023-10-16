import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(366500); // Tiempo en segundos (ejemplo: 4 días, 6 horas, 8 minutos y 20 segundos)

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
  const seconds = countdown % 60;

  return (
    <div className="">
      
      <div className="countdown">
      <h1>Cuenta Regresiva</h1>
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
