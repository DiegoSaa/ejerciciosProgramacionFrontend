import React, { useEffect } from "react";
import Pelicula from "./peliculas";
import Desplegable from "./genero";
import Filtro from "./filtroFechaTitulo";
import lupa from "../data/Vector.png";
import BancoPeliculas from "../data/Movies.json";

import { useDispatch, useSelector } from "react-redux";
import {
  actionText,
  actionGet,
  actionFilter,
  actionGenres,
  actionDate,
} from "../actions/peliculasActions";

const Ejercicio3 = () => {
  const dispatch = useDispatch();

  const {
    busqueda,
    busquedaPeliculas,
    movieFilter,
    selectedGenres,
    selectedDate,
  } = useSelector((state) => state.peliculasReducer);

  const { activos } = useSelector((state) => state.dropdownGenres);

  // Se ejecuta una vez al incio para hacer una petición a la API por el json contenedor de las peliculas
  useEffect(() => {
    dispatch(actionGet());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //const identi = genresIds.map((values) => values);

    const genres = BancoPeliculas.genres.filter(
      (generos, index) => activos[index]
    );

    const data = genres.map((generos) => generos.name);

    dispatch(actionGenres(data));
    const peliculas = aplicarFiltro(busqueda, data, selectedDate);
    dispatch(actionFilter(peliculas));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activos]);

  const textChange = (e) => {
    const text = e.target.value;
    dispatch(actionText(text));
  };

  const lupaClick = (e) => {
    const peliculas = aplicarFiltro(busqueda, selectedGenres, selectedDate);
    console.log(
      "resultado filtro: ",
      busqueda,
      selectedGenres,
      selectedDate,
      peliculas
    );
    dispatch(actionFilter(peliculas));
  };

  const handleOnActiveFiltro = (e) => {
    const fecha = parseInt(e);
    dispatch(actionDate(fecha));
    const peliculas = aplicarFiltro(busqueda, selectedGenres, selectedDate);
    dispatch(actionFilter(peliculas));
  };

  /**
   *
   * @param {*} texto parametro String con el nombre de la busqueda
   * @param {*} generos
   * @param {*} opcFecha
   * @author [Diego Fernando]
   * @description
   * @version 1.0.0
   * @date 26/08/2021
   * @returns
   */
  const aplicarFiltro = (texto, generos, opcFecha) => {
    const filtroBusqueda =
      busquedaPeliculas.results === undefined ||
      busquedaPeliculas.results.filter(
        (movie) =>
          generos.every((genId) =>
            generosIds2Label(movie.genre_ids).includes(genId)
          ) && movie.title.toLowerCase().includes(texto.toLowerCase())
      );

    console.log(
      "filtro llamado con: ",
      typeof texto,
      texto,
      ", ",
      generos,
      opcFecha,
      filtroBusqueda
    );

    if (filtroBusqueda.length > 0) {
      switch (opcFecha) {
        case 0:
          return filtroBusqueda.sort((f1, f2) => {
            const fechaIndex1 = new Date(f1.release_date);
            const fechaIndex2 = new Date(f2.release_date);
            const fil = fechaIndex1 - fechaIndex2;

            return fil;
          });

        case 1:
          return filtroBusqueda.sort((f1, f2) => {
            const fechaIndex1 = new Date(f1.release_date);
            const fechaIndex2 = new Date(f2.release_date);
            const fil = fechaIndex2 - fechaIndex1;
            return fil;
          });

        case 2:
          return filtroBusqueda.sort((v1, v2) => {
            const v1Index = v1.vote_average;
            const v2Index = v2.vote_average;
            const fil = v1Index - v2Index;
            return fil;
          });

        case 3:
          return filtroBusqueda.sort((v1, v2) => {
            const v1Index = v1.vote_average;
            const v2Index = v2.vote_average;
            const fil = v2Index - v1Index;
            return fil;
          });

        default:
          return [];
      }
    }
    return [];
  };

  return (
    <div>
      <h1>Películas</h1>
      <div>
        <input onChange={textChange} />
        <button className='btn btn-secundary btn-sm' onClick={lupaClick}>
          <img src={lupa} alt='lupa' />
        </button>
        <Desplegable generos={BancoPeliculas.genres} />
        <span> Ordenar</span>

        <Filtro
          onActive={handleOnActiveFiltro}
          /*
          fechas={busquedaPeliculas.genres}*/
        />
      </div>

      <div className='container-fluid m-2 p-2 '>
        <div className='row'>
          {movieFilter === undefined ||
            (movieFilter.length > 0 &&
              movieFilter.map((pelicula) => (
                <Pelicula
                  id={pelicula.id}
                  key={pelicula.id}
                  titulo={pelicula.title}
                  info={pelicula}
                  genero={generos(pelicula.genre_ids)}
                />
              )))}
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
function generosIds2Label(ids) {
  let generos = [];

  ids.map((cantidad) =>
    generos.push(
      BancoPeliculas.genres.filter((busqueda) => busqueda.id === cantidad)[0]
        .name
    )
  );

  return generos;
}

export default Ejercicio3;
