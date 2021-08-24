const initialState = {
  valor: 0,
  salida: "Click para mostrar secuencia AKELAB",
};

const secuencia = (num) => {
  let salida = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      salida.push("AKELAB");
    } else if (i % 3 === 0) {
      salida.push("AKE");
    } else if (i % 5 === 0) {
      salida.push("LAB");
    } else {
      salida.push(String(i));
    }
  }

  return salida.join(", ");
};

const akelabReducer = (state = initialState, action) => {
  switch (action.type) {
    case "secuencia/numero":
      return {
        valor: action.numero,
      };
    case "secuencia/calculo":
      return {
        salida: secuencia(state.valor),
      };
    default:
      return state;
  }
};

export default akelabReducer;
