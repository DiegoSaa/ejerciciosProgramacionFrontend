import { Dropdown } from "react-bootstrap";
import opciones from "../data/Filter Icon.png";
import React, { useState } from "react";
import "./stylesMenu.css";

const Desplegable = (props) => {
  const generos = props.generos.map((elemento) => elemento.name);

  const [activos, setActivos] = useState(new Array(generos.length).fill(false));

  const toggle = (e) => {
    const copiaActivos = [...activos];
    copiaActivos[e] = !copiaActivos[e];
    setActivos(copiaActivos);

    props.onActive(
      props.generos.filter((generos, index) => copiaActivos[index])
    );
  };

  return (
    <Dropdown className="btn btn-primary btn-sm" onSelect={toggle}>
      <Dropdown.Toggle className="btn btn-secundary btn-sm">
        <img src={opciones} alt="opciones" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {generos.map((genero, index) => (
          <Dropdown.Item
            id={index}
            key={index}
            eventKey={index}
            active={activos[index]}
          >
            {" "}
            {genero}{" "}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Desplegable;
