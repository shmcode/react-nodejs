import React from "react";
import "./style.css";

export const Sesin = () => {
  return (
    <div className="sesin">
      <div className="overlap-wrapper">
        <div className="overlap">
          <a className="estudiante" href="http://localhost:8081/CLINICA" rel="noopener noreferrer" target="_blank">
            <div className="overlap-group">
              <div className="rectangle" />
              <img className="img" alt="Rectangle" src="/img/rectangle-3.png" />
              <div className="boton-SIGNIN">
                <div className="div-wrapper">
                  <div className="text-wrapper">Estudiante</div>
                </div>
              </div>
            </div>
          </a>
          <a className="colaborador" href="http://localhost:8080/CLINICA" rel="noopener noreferrer" target="_blank">
            <div className="div">
              <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-3-1.png" />
              <div className="rectangle-3" />
              <div className="text-wrapper-2">Personal</div>
            </div>
          </a>
          <div className="group">
            <div className="s">SELECCIONA</div>
            <div className="s-2">TU ROL</div>
          </div>
        </div>
      </div>
    </div>
  );
};
