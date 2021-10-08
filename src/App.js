import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import FormHomework from "./components/FormHomework";
import ListaTareas from "./components/ListaTareas";
const App = () => {
  // Obtenemos las tareas guardadas de localStorage
  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];
  const [homework, changeHomework] = useState(tareasGuardadas);

  // Accedemos a localStorage y comprobamos si mostrarCompletadas es null

  let confiMostrarCompletadas = "";
  if (localStorage.getItem("mostrarCompletadas") === null) {
    confiMostrarCompletadas = true;
  } else {
    confiMostrarCompletadas =
      localStorage.getItem("mostrarCompletadas") === "true";
  }

  // Guardando el estado dentro de localStorage
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(
    confiMostrarCompletadas
  );

  // El estado de mostrarCompletadas
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(homework));
  }, [homework]);

  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormHomework homework={homework} changeHomework={changeHomework} />
      <ListaTareas
        homework={homework}
        changeHomework={changeHomework}
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
    </div>
  );
};

export default App;
