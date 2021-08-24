import apiCalls from "../client/apiCalls";

export const actionText = (text) => ({
  type: "peliculas/change",
  text: text,
});

export const actionSet = (jsonPeliculas) => ({
  type: "peliculas/set",
  json: jsonPeliculas,
});

export const toggleLoading = () => ({
  type: "peliculas/toggle",
});

const getPeliculas = (peliculas) => ({
  type: "peliculas/get",
  payload: peliculas,
});

export const actionGet = () => {
  return async (dispatch) => {
    let data;
    const response = await apiCalls.getPeliculas();
    if (!response.ok) return false;
    data = await response.json();
    dispatch(getPeliculas(data.results));

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
