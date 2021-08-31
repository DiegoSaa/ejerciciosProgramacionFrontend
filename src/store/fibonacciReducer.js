//reducers

const initialState = {
  salida: "Click para mostrar serie",
};

//función para generar la secuencia de la serie completa de Fibonacci, según el paremetro num.
const fibo = (num) => {
  let numero1 = 0,
    numero2 = 1,
    siguiente;
  let salida = [];
  for (let i = 1; i <= num; i++) {
    siguiente = numero1 + numero2;
    numero1 = numero2;
    numero2 = siguiente;
    salida.push(String(numero1));
  }
  return salida.join(", ");
};

const fibonacciReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fibonacci/set":
      return {
        salida: action.numero,
      };
    case "fibonacci/calculo":
      return {
        salida: fibo(state.salida),
      };
    default:
      return state;
  }
};

export default fibonacciReducer;
