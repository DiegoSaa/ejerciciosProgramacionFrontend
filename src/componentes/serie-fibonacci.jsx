import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCalculo, actionNumero } from "../actions/fibonacciActions";

const SerieFibonacci = () => {
  const dispatch = useDispatch();
  const { valor, salida } = useSelector((state) => state.fibonacciReducer);

  const handleChange = (e) => {
    var letterNumber = /^[1-9][0-9]*$/;
    if (!e.target.value.match(letterNumber)) {
      //setSalida("valor invalido")
    } else {
      //setSalida("valor valido")
      dispatch(actionNumero(e.target.value));
    }
  };

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
        <button className="btn btn-primary btn-sm" onClick={handleClick}>
          Mostrar serie
        </button>
      </div>
      <p>{salida}</p>
    </div>
  );
};

export default SerieFibonacci;
