import React, { Component } from 'react';
import Pelicula from './peliculas';
import Menu from './genero';
import BancoPeliculas from '../data/Movies.json'
import lupa from "../data/Vector.png";
import opciones from "../data/Filter Icon.png";
import flecha from "../data/Arrow Icon.png";

class Ejercicio3 extends Component {


    state = {  
        busqueda:"",
        busquedaPeliculas: BancoPeliculas.results
    }


    handleChange = (e) =>{
        this.setState({busqueda: e.target.value})
    }

    handleClick = (e) =>{
        const filtro= BancoPeliculas.results.filter(busqueda => busqueda.title.toLowerCase().includes(this.state.busqueda.toLowerCase()))
        this.setState({busquedaPeliculas: filtro})
    }

    

    

    render (){

        


        return(
        <div>
          <h1>Películas</h1>
                <div>
                    <input onChange={(e) => {this.handleChange(e)}}/>
                    <button  className="btn btn-secundary btn-sm" onClick={(e) => {this.handleClick(e)}}><img src={lupa} alt="lupa"/></button>
                    <button  className="btn btn-secundary btn-sm" ><img src={opciones} alt="opciones"/></button>
                    <Menu/>
                    <span> Ordenar</span>
                    <button  className="flecha btn btn-secundary btn-sm" ><img src={flecha} alt="flecha"/></button>

                </div>


         <div className="container-fluid m-2 p-2 ">  
          <div className="row">
            {this.state.busquedaPeliculas.map(pelicula => (
                
                <Pelicula id={pelicula.id} key= {pelicula.id} titulo={pelicula.title} info={pelicula} 
                genero={ generos(pelicula.genre_ids)} />

            ))
            }
            </div>
          </div>
        </div>

        );
    }
   
}

function generos(ids) {

    let generos=[]
  
    ids.map(cantidad=> 
        generos.push(BancoPeliculas.genres.filter(busqueda => busqueda.id ===cantidad)[0].name))
    
    return generos.join(',')
}

export default Ejercicio3;