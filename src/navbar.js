import React from 'react';
import './index.css'; // Importa el archivo CSS

const Navbar = () => {
  return (
    <nav class="navbar navbar-black navbar-expand-lg" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Gophora</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/acerca">Acerca de</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/servicios">Servicios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
