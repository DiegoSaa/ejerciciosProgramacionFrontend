const config = {
  host: "http://localhost:3000",
  endpoints: {
    getPeliculas: "/peliculas",
    getPeliculaById: "/peliculasbyID",
  },
  headers: {
    Accept: "application/json",
  },
};

export default config;
