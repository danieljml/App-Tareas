import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import "./../App.css";

const Header = ({ mostrarCompletadas, cambiarMostrarCompletadas }) => {
  const toggleCompletadas = () => {
    cambiarMostrarCompletadas(!mostrarCompletadas);
  };
  return (
    <header className="header headerColor">
      <div className="header__container-title">
        <h1 className="header__title">Lista de tareas</h1>
      </div>
      {mostrarCompletadas ? (
        <button onClick={() => toggleCompletadas()} className="header__btn">
          No mostrar completadas
          <FontAwesomeIcon icon={faEyeSlash} className="header__icon-eye-btn" />
        </button>
      ) : (
        <button onClick={() => toggleCompletadas()} className="header__btn">
          Mostrar completadas
          <FontAwesomeIcon icon={faEye} className="header__icon-eye-btn" />
        </button>
      )}
    </header>
  );
};

export default Header;
