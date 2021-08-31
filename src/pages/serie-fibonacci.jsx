import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCalculo, actionSet } from "../actions/fibonacciActions";

const SerieFibonacci = () => {
  const dispatch = useDispatch();
  const { salida } = useSelector((state) => state.fibonacciReducer);

  const handleChange = (e) => {
    //se valida que el valor ingresado en el input sea un número
    var letterNumber = /^[1-9][0-9]*$/;
    if (!e.target.value.match(letterNumber)) {
      dispatch(actionSet("valor invalido"));
    } else {
      dispatch(actionSet(e.target.value));
    }
  };

  //con el evento click se maneja el cálculo por medio del reducer
  const handleClick = () => {
    dispatch(actionCalculo());
  };

  return (
    <div>
      <h1>Serie de Fibonacci</h1>
      <div>
        <input
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button className='btn btn-primary btn-sm' onClick={handleClick}>
          Mostrar serie
        </button>
      </div>
      <p>{salida}</p>
    </div>
  );
};

export default SerieFibonacci;
