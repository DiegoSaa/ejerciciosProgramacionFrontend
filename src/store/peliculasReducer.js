const initialState = {
  busqueda: "",
  busquedaPeliculas: [],
  movieFilter: [],
  selectedGenres: [],
  selectedDate: 0,
};

const peliculasReducer = (state = initialState, action) => {
  switch (action.type) {
    case "peliculas/change":
      return {
        ...state,
        busqueda: action.text,
      };
    case "peliculas/genres":
      return {
        ...state,
        selectedGenres: action.genres,
      };
    case "peliculas/date":
      return {
        ...state,
        selectedDate: action.date,
      };
    case "peliculas/get":
      return {
        ...state,
        busquedaPeliculas: action.payload,
      };
    case "peliculas/filter":
      return {
        ...state,
        movieFilter: action.json,
      };

    default:
      return state;
  }
};

export default peliculasReducer;
