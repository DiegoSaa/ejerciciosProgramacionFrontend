import React, { useEffect } from "react";
import Pelicula from "../componentes/peliculas";
import Desplegable from "../componentes/genero";
import Filtro from "../componentes/filtroFechaTitulo";
import lupa from "../data/Vector.png";

import './style.css';

import { useDispatch, useSelector } from "react-redux";
import {
  actionText,
  actionGet,
  actionFilter,
  actionGenres,
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
  const { filterData } = useSelector((state) => state.fechaReducer);

  // Se ejecuta una vez al incio para hacer una petición a la API del json contenedor de las peliculas
  useEffect(() => {
    dispatch(actionGet());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //cuando cambian los generos activos se cambia el estado de los generos
    const genres = busquedaPeliculas.genres?.filter(
      (generos, index) => activos[index]
    );
    const data = genres?.map((generos) => generos.name);

    dispatch(actionGenres(data)); //actualiza los generos activos de: selectedGenres
    const peliculas = aplicarFiltro(busqueda, data, selectedDate);
    //aplica el filtro de la busqueda
    dispatch(actionFilter(peliculas));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activos]);

  useEffect(() => {
    //cuando cambian el filtro de fecha y votos activos se cambia el estado
    const peliculas = aplicarFiltro(busqueda, selectedGenres, filterData);
    dispatch(actionFilter(peliculas));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterData]);

  const textChange = (e) => {
    const text = e.target.value;
    dispatch(actionText(text));
  };

  const lupaClick = (e) => {
    const peliculas = aplicarFiltro(busqueda, selectedGenres, selectedDate);
    dispatch(actionFilter(peliculas));
  };

  /**
   *
   * @param {*} texto parametro String con el nombre de la busqueda
   * @param {*} generos parametro Arreglo con los nombres de los generos para filtrar
   * @param {*} opcFecha parametro numerico para ordenar el objeto de salida, 0 muevas-antiguas, 1 antiguas-nuevas, 2 0-10 puntuacion, 3 10-0 puntuacion.
   * @author [Diego Fernando]
   * @description
   * @version 1.0.0
   * @date 26/08/2021
   * @returns objeto ordenado
   */
  const aplicarFiltro = (texto, generos, opcFecha) => {
    const filtroBusqueda =
      busquedaPeliculas.results === undefined ||
      busquedaPeliculas.results.filter(
        (movie) =>
          generos?.every((genId) =>
            generosIds2Label(movie.genre_ids).includes(genId)
          ) && movie.title.toLowerCase().includes(texto.toLowerCase())
      );

    if (filtroBusqueda.length > 0) {
      switch (opcFecha) {
        case 0:
          return filtroBusqueda.sort((f1, f2) => {
            const fechaIndex1 = new Date(f1.release_date);
            const fechaIndex2 = new Date(f2.release_date);
            const fil = fechaIndex2 - fechaIndex1;

            return fil;
          });

        case 1:
          return filtroBusqueda.sort((f1, f2) => {
            const fechaIndex1 = new Date(f1.release_date);
            const fechaIndex2 = new Date(f2.release_date);
            const fil = fechaIndex1 - fechaIndex2;
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
        case 4:
          return filtroBusqueda.sort((v1, v2) => {
            return v1.title.localeCompare(v2.title);
          });
        case 5:
          return filtroBusqueda.sort((v1, v2) => {
            return v2.title.localeCompare(v1.title);
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
      <div className="Movies__container">
        <input  />
        <button className='btn btn-secundary btn-sm' onClick={lupaClick}>
          <img src={lupa} alt='lupa' />
        </button>
        <Desplegable generos={busquedaPeliculas.genres} />
        <span> Ordenar</span>

        <Filtro />
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

  function generos(ids) {
    let generos = [];

    ids?.map((cantidad) =>
      generos.push(
        busquedaPeliculas.genres.filter(
          (busqueda) => busqueda.id === cantidad
        )[0].name
      )
    );

    return generos.join(",");
  }
  function generosIds2Label(ids) {
    let generos = [];

    ids?.map((cantidad) =>
      generos.push(
        busquedaPeliculas.genres.filter(
          (busqueda) => busqueda.id === cantidad
        )[0].name
      )
    );
    return generos;
  }
};

export default Ejercicio3;
