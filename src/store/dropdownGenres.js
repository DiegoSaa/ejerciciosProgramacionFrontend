const initialState = {
  activos: [],
};

const toggle = (e, activos) => {
  const copiaActivos = [...activos];
  copiaActivos[e] = !copiaActivos[e];
  return copiaActivos;
};

const dropdownGenres = (state = initialState, action) => {
  switch (action.type) {
    case "genres/array":
      return {
        activos: toggle(action.modificar, state.activos),
      };
    default:
      return state;
  }
};

export default dropdownGenres;
