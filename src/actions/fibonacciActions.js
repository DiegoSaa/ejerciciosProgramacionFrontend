//acciones para setear el valor de salida de la serie y para realisar el calculo con el valor.

export const actionSet = (num) => ({
  type: "fibonacci/set",
  numero: num,
});

export const actionCalculo = () => ({
  type: "fibonacci/calculo",
});
