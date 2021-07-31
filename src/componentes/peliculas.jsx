import React from 'react';
import "./styles.css";
import Estrellas from "../componentes/estrellas.jsx"

const url_peliculas="https://image.tmdb.org/t/p/w500"

const Pelicula=(props)=>{

    var fecha = new Date(props.info.release_date);

    
    return ( 

      
        <div className="movie border rounded border-dark m-2 p-2">
            <div className="container">
                <div className="row">
                    <h3 className="tituloPelicula">{props.info.title+" ("+fecha.getFullYear()+")" }</h3>

                   
                    <img className="movieImagen" src={url_peliculas+props.info.poster_path}  alt={props.info.title} />

                    <div className="col">
                        <p>{props.info.overview}</p>

                        <p>
                            <b>Titulo: </b>
                            {props.info.original_title}
                        </p>

                        <div className="contenedor-estrella">

                            <p>
                                <b>Calificación: </b> <span>{props.info.vote_average}</span>
                                
                            </p>
    
                            <Estrellas  key="estrellas" estrellas={props.info.vote_average}/>
                                
                      
                        </div>

                        <p>
                            <b>Genero: </b> <span>{props.genero}</span>
                        </p>

                        <p>
                            <b>Fecha de realización: </b> <span>{props.info.release_date}</span>
                        </p>
                            
                    </div>
                   
                </div>
            </div>
        </div>
      
    );
    
}
 
export default Pelicula;
