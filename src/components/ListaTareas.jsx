import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({ homework, changeHomework, mostrarCompletadas }) => {
  const toggleCompletada = (id) => {
    changeHomework(
      homework.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, finish: !tarea.finish };
        }
        return tarea;
      })
    );
  };
  const editarTarea = (id, nuevaTarea) => {
    changeHomework(
      homework.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, content: nuevaTarea };
        }
        return tarea;
      })
    );
  };
  const eliminarTarea = (id) => {
    changeHomework(
      homework.filter((tarea) => {
        if (tarea.id !== id) {
          return tarea;
        }
        return "";
      })
    );
  };

  return (
    <ul className="lista-tareas">
      {homework.length > 0 ? (
        homework.map((tarea) => {
          if (mostrarCompletadas) {
            return (
              <Tarea
                key={tarea.id}
                id={tarea.id}
                content={tarea.content}
                finish={tarea.finish}
                toggleCompletada={toggleCompletada}
                editarTarea={editarTarea}
                eliminarTarea={eliminarTarea}
              />
            );
          } else if (!tarea.finish) {
            return (
              <Tarea
                key={tarea.id}
                id={tarea.id}
                content={tarea.content}
                finish={tarea.finish}
                toggleCompletada={toggleCompletada}
                editarTarea={editarTarea}
                eliminarTarea={eliminarTarea}
              />
            );
          }
          return "";
        })
      ) : (
        <div className="lista-tareas__mensaje">~ No hay tareas agregadas ~</div>
      )}
    </ul>
  );
};

export default ListaTareas;
