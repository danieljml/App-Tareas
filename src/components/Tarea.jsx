import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faSquare,
  faEdit,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Tarea = ({
  id,
  content,
  finish,
  toggleCompletada,
  editarTarea,
  eliminarTarea,
}) => {
  const [editandoTarea, cambiarEditandoTarea] = useState(false);
  const [nuevaTarea, cambiarnuevaTarea] = useState(content);
  const handleSubmit = (e) => {
    e.preventDefault();
    editarTarea(id, nuevaTarea);
    cambiarEditandoTarea(false);
  };

  return (
    <li className="lista-tareas__tarea">
      <FontAwesomeIcon
        icon={finish ? faCheckSquare : faSquare}
        className="lista-tareas__icono lista-tareas__icono-check"
        onClick={() => toggleCompletada(id)}
      />
      <div className="lista-tareas__texto">
        {editandoTarea ? (
          <form
            action=""
            className="formulario-editar-tarea"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={nuevaTarea}
              onChange={(e) => cambiarnuevaTarea(e.target.value)}
              className="formulario-editar-tarea__input"
            />
            <button type="submit" className="formulario-editar-tarea__btn">
              Actualizar
            </button>
          </form>
        ) : (
          content
        )}
      </div>
      <div className="lista-tareas__contenedor-botones">
        <FontAwesomeIcon
          icon={faEdit}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => {
            cambiarEditandoTarea(!editandoTarea);
          }}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => {
            eliminarTarea(id);
          }}
        />
      </div>
    </li>
  );
};

export default Tarea;
