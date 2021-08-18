import { Dropdown } from 'react-bootstrap'
import flecha from "../data/Arrow Icon.png";
import React, { useState } from 'react';
import "./stylesMenu.css"

const Filtro = (props) => {

  //const fechas =props.peliculas.map(elemento=> elemento.name)

  const [fechaNuevo, setFechaNuevo] = useState(false)
  const [fechaAntiguo, setFechaAntiguo]= useState(false)

  const [calMenor, setCalMenor] = useState(false)
  const [calMayor, setCalMayor] = useState(false)




  const toggle = (e) => {
    console.log(e)

    switch (e) {
      case 0:
        
        break;
    
      default:
        break;
    }


    //props.onActive(props.generos.filter((generos, index) => copiaActivos[index]))

  }

  return (

    
    <Dropdown className="btn btn-primary btn-sm" onSelect={toggle}>
      <Dropdown.Toggle className="flecha btn btn-secundary btn-sm"><img src={flecha} alt="flecha" /></Dropdown.Toggle>


      <Dropdown.Menu> 

        <Dropdown.Item id="item1" key="item1" disabled> <b>Fecha </b></Dropdown.Item>
        <Dropdown.Item id="0" key="0" eventKey="0" active={fechaNuevo}> Nuevas - Antiguas </Dropdown.Item>
        <Dropdown.Item id="1" key="1" eventKey="1" active={fechaAntiguo}> Antiguas - Nuevas </Dropdown.Item>
        <Dropdown.Item id="item2" key="item2" disabled> <b>Calificación </b></Dropdown.Item>
        <Dropdown.Item id="2" key="2" eventKey="2" active={calMenor}> 0 - 10 puntos </Dropdown.Item>
        <Dropdown.Item id="3" key="3" eventKey="3" active={calMayor}> 10 - 0 puntos </Dropdown.Item>


      </Dropdown.Menu>
    </Dropdown>

  );

}

export default Filtro;