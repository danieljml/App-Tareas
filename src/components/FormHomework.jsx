import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const FormHomework = ({ homework, changeHomework }) => {
  const [inputHomework, changeInputHomework] = useState("");
  const handlerInput = (e) => {
    changeInputHomework(e.target.value);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    changeHomework([
      ...homework,
      { id: uuidv4(), content: inputHomework, finish: false },
    ]);
    changeInputHomework("");
  };
  return (
    <form action="" onSubmit={handlerSubmit} className="form-homework">
      <input
        type="text"
        placeholder="Escribe una tarea"
        className="form-homework__input"
        value={inputHomework}
        onChange={(e) => handlerInput(e)}
      />
      <button type="submit" className="form-homework__btn">
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="form-homework__icon-btn"
        />
      </button>
    </form>
  );
};

export default FormHomework;
