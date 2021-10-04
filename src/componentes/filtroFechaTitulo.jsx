import { Dropdown } from "react-bootstrap";
import flecha from "../data/Arrow Icon.png";
import React from "react";
import "./stylesMenu.css";

import { useDispatch, useSelector } from "react-redux";
import { actionFilter } from "../actions/fechaActions";

const Filtro = (props) => {

  const dispatch = useDispatch();
  const { filterData } = useSelector((state) => state.fechaReducer);

  const toggle = (e) => {
    const selected = parseInt(e);
    dispatch(actionFilter(selected));
  };

  return (
    <Dropdown className='Filtro__flecha-right' onSelect={toggle}>
      <Dropdown.Toggle className='Filtro__flecha-right btn btn-secundary btn-sm btn-light'>
        <img className='flecha' src={flecha} alt='flecha' />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item id='item1' key='item1' disabled>
          {" "}
          <b>Fecha </b>
        </Dropdown.Item>
        <Dropdown.Item id='0' key='0' eventKey='0' active={filterData === 0}>
          {" "}
          Nuevas - Antiguas{" "}
        </Dropdown.Item>
        <Dropdown.Item id='1' key='1' eventKey='1' active={filterData === 1}>
          {" "}
          Antiguas - Nuevas{" "}
        </Dropdown.Item>
        {/* Nuevo item */}
        <Dropdown.Item id='item3' key='item3' disabled>
          {" "}
          <b>Alfabético</b>
        </Dropdown.Item>
        <Dropdown.Item id='4' key='4' eventKey='4' active={filterData===4}>
          {" "}
          Ascendente{" "}
        </Dropdown.Item>
        <Dropdown.Item id='5' key='5' eventKey='5' active={filterData===5}>
          {" "}
          Descendente{" "}
        </Dropdown.Item>
        {/* Nuevo item */}
        <Dropdown.Item id='item2' key='item2' disabled>
          {" "}
          <b>Calificación </b>
        </Dropdown.Item>
        <Dropdown.Item id='2' key='2' eventKey='2' active={filterData === 2}>
          {" "}
          0 - 10 puntos{" "}
        </Dropdown.Item>
        <Dropdown.Item id='3' key='3' eventKey='3' active={filterData === 3}>
          {" "}
          10 - 0 puntos{" "}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
};

export default Filtro;
