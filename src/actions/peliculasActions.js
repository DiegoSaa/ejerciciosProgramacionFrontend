import apiCalls from "../client/apiCalls";

export const actionText = (text) => ({
  type: "peliculas/change",
  text: text,
});
export const actionGenres = (dataGenres) => ({
  type: "peliculas/genres",
  genres: dataGenres,
});
export const actionDate = (charDate) => ({
  type: "peliculas/date",
  date: charDate,
});

export const actionFilter = (jsonPeliculas) => ({
  type: "peliculas/filter",
  json: jsonPeliculas,
});

const getPeliculas = (peliculas) => ({
  type: "peliculas/get",
  payload: peliculas,
});

//ejemplo con async y await
export const actionGet = () => {
  return async (dispatch) => {
    let data;
    const response = await apiCalls.getPeliculas();
    if (!response.ok) return false;
    data = await response.json();
    dispatch(getPeliculas(data));
    dispatch(actionFilter(data.results));

    //funca, ejemplo con async y Promesas

    // apiCalls.getPeliculas().then((response) => {
    //   if (response.ok) {
    //     response.json().then((data) => {
    //       dispatch(getPeliculas(data.results));
    //     });
    //   }
    // });
  };
};
