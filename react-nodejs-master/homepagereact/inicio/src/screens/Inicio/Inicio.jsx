import React from "react";
import "./style.css";

export const Inicio = () => {
  return (
    <div className="inicio">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="fondo-UAM" alt="Fondo UAM" src="/img/fondouam.png" />
          <img className="vector" alt="Vector" src="/img/vector-1.svg" />
          <a className="boton-SIGNIN" href="http://localhost:52528/" rel="noopener noreferrer" target="_blank">
            <div className="overlap-group">
              <div className="text-wrapper">Iniciar sesión</div>
            </div>
          </a>
          <div className="ellipse" />
          <img className="persona" alt="Persona" src="/img/persona.png" />
          <img className="logo-UAM" alt="Logo UAM" src="/img/logouam.png" />
          <div className="div">REGISTRO</div>
          <div className="DE-VISITAS"> DE VISITAS</div>
        </div>
      </div>
    </div>
  );
};
