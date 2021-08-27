import { Dropdown } from "react-bootstrap";
import flecha from "../data/Arrow Icon.png";
import React, { useState } from "react";
import "./stylesMenu.css";

const Filtro = (props) => {
  const [filterData, setFilter] = useState(0);

  const toggle = (e) => {
    const selected = parseInt(e);
    props.onActive(selected);
    setFilter(selected);
  };

  return (
    <Dropdown className='btn' onSelect={toggle}>
      <Dropdown.Toggle className='btn btn-secundary btn-sm btn-light'>
        <img className='flecha' src={flecha} alt='flecha' />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item id='item1' key='item1' disabled>
          {" "}
          <b>Fecha </b>
        </Dropdown.Item>
        <Dropdown.Item
          id='0'
          key='0'
          eventKey='0'
          active={filterData === 0 ? true : false}
        >
          {" "}
          Nuevas - Antiguas{" "}
        </Dropdown.Item>
        <Dropdown.Item
          id='1'
          key='1'
          eventKey='1'
          active={filterData === 1 ? true : false}
        >
          {" "}
          Antiguas - Nuevas{" "}
        </Dropdown.Item>
        <Dropdown.Item id='item2' key='item2' disabled>
          {" "}
          <b>Calificación </b>
        </Dropdown.Item>
        <Dropdown.Item
          id='2'
          key='2'
          eventKey='2'
          active={filterData === 2 ? true : false}
        >
          {" "}
          0 - 10 puntos{" "}
        </Dropdown.Item>
        <Dropdown.Item
          id='3'
          key='3'
          eventKey='3'
          active={filterData === 3 ? true : false}
        >
          {" "}
          10 - 0 puntos{" "}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Filtro;
