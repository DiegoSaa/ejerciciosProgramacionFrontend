import React, { useEffect } from "react";
import Pelicula from "./peliculas";
import Desplegable from "./genero";
import Filtro from "./filtroFechaTitulo";
import lupa from "../data/Vector.png";
import BancoPeliculas from "../data/Movies.json";

import { useDispatch, useSelector } from "react-redux";
import { actionText, actionGet, actionSet } from "../actions/peliculasActions";

const Ejercicio3 = () => {
  const dispatch = useDispatch();

  const { busqueda, busquedaPeliculas, isLoading } = useSelector(
    (state) => state.peliculasReducer
  );

  useEffect(() => {
    dispatch(actionGet());
  }, []);

  const handleChange = (e) => {
    dispatch(actionText(e.target.value));
  };

  const handleClick = (e) => {
    const filtro = busquedaPeliculas;
    const algo = busqueda;
    dispatch(actionSet(filtro));
  };

  const handleOnActive = (e) => {
    //busqueda.genre_ids.every(r=>identi.includes(r))

    const identi = e.map((values) => values.id);

    const filtro = BancoPeliculas.results.filter((busqueda) =>
      identi.every((r) => busqueda.genre_ids.includes(r))
    );

    if (filtro.length > 0) {
      dispatch(actionSet(filtro));
    } else {
      dispatch(actionSet([]));
    }
  };

  const handleOnActiveFiltro = () => {};

  return (
    <div>
      <h1>Películas</h1>
      <div>
        <input onChange={handleChange} />
        <button className="btn btn-secundary btn-sm" onClick={handleClick}>
          <img src={lupa} alt="lupa" />
        </button>
        <Desplegable
          onActive={handleOnActive}
          generos={BancoPeliculas.genres}
        />
        <span> Ordenar</span>

        <Filtro
          onActive={handleOnActiveFiltro}
          fechas={BancoPeliculas.results.release_date}
          votos={BancoPeliculas.results.vote_average}
        />
      </div>

      <div className="container-fluid m-2 p-2 ">
        <div className="row">
          {busquedaPeliculas !== undefined && busquedaPeliculas.length > 0 ? (
            busquedaPeliculas.map((pelicula) => (
              <Pelicula
                id={pelicula.id}
                key={pelicula.id}
                titulo={pelicula.title}
                info={pelicula}
                genero={generos(pelicula.genre_ids)}
              />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

function generos(ids) {
  let generos = [];

  ids.map((cantidad) =>
    generos.push(
      BancoPeliculas.genres.filter((busqueda) => busqueda.id === cantidad)[0]
        .name
    )
  );

  return generos.join(",");
}

export default Ejercicio3;
