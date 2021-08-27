import { Dropdown } from "react-bootstrap";
import opciones from "../data/Filter Icon.png";
import "./stylesMenu.css";

import { useDispatch, useSelector } from "react-redux";
import { actionArray } from "../actions/genresActions";

const Desplegable = (props) => {
  const generos = props.generos.map((elemento) => elemento.name);
  const dispatch = useDispatch();
  const { activos } = useSelector((state) => state.dropdownGenres);

  const toggle = (e) => {
    dispatch(actionArray(e));
  };

  return (
    <Dropdown className='btn' onSelect={toggle}>
      <Dropdown.Toggle className='btn btn-secundary btn-sm btn-light'>
        <img src={opciones} alt='opciones' />
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
