import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCalculo, actionNumero } from "../actions/akelabActions";

const SerieAkelab = () => {
  const dispatch = useDispatch();
  const { valor, salida } = useSelector((state) => state.akelabReducer);

  const handleChange = (e) => {
    //this.setState({ valor: e.target.value });
    var letterNumber = /^[1-9][0-9]*$/;
    if (!e.target.value.match(letterNumber)) {
      //this.setState({ salida: "valor invalido" });
    } else {
      //this.setState({ salida: "valor valido" });
      dispatch(actionNumero(e.target.value));
    }
  };

  const handleClick = (e) => {
    //this.setState({ salida: secuencia(this.state.valor) });
    dispatch(actionCalculo());
  };

  return (
    <div>
      <h1>Secuencia AKELAB</h1>
      <input onChange={handleChange} />
      <button className=" btn btn-primary btn-sm" onClick={handleClick}>
        Mostrar serie
      </button>
      <p>{salida}</p>
    </div>
  );
};

export default SerieAkelab;
