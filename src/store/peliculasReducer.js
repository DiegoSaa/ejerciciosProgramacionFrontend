const initialState = {
  busqueda: "",
  busquedaPeliculas: [],
  isLoading: true,
};

const peliculasReducer = (state = initialState, action) => {
  switch (action.type) {
    case "peliculas/change":
      return {
        ...state,
        busqueda: action.text,
      };
    case "peliculas/get":
      return {
        ...state,
        busquedaPeliculas: action.payload,
      };

    case "peliculas/set":
      return {
        ...state,
        busquedaPeliculas: action.json,
      };

    default:
      return state;
  }
};

export default peliculasReducer;
