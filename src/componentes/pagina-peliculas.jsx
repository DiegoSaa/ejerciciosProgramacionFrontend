import React, { Component } from 'react';
import Pelicula from './peliculas';
import Desplegable from './genero';
import Filtro from './filtroFechaTitulo';
import lupa from "../data/Vector.png";
import BancoPeliculas from "../data/Movies.json";



class Ejercicio3 extends Component {


    state = {  
        busqueda:"",
        busquedaPeliculas: []
    }

    componentDidMount(){
        dbPeliculas("",[],"0").then((response) => this.setState({busquedaPeliculas: response}))
    }


    handleChange = (e) =>{
        this.setState({busqueda: e.target.value})
    }

    handleClick = (e) =>{
        const filtro= dbPeliculas(this.state.busqueda.toLowerCase(), [],0)
        this.setState({busquedaPeliculas: filtro})
    }

    handleOnActive = (e) =>{
        
        //busqueda.genre_ids.every(r=>identi.includes(r))
       
        const identi=e.map(values=> values.id)

        const filtro= BancoPeliculas.results.filter(busqueda => identi.every(r=>busqueda.genre_ids.includes(r)))
        

    
        if(filtro.length>0){

            this.setState({busquedaPeliculas: filtro})

        }
        else{

            this.setState({busquedaPeliculas: []})

            
        }
        
   



    }


    render (){

        const {busquedaPeliculas} = this.state;

        


        return(
        <div>
          <h1>Películas</h1>
                <div>
                    <input onChange={(e) => {this.handleChange(e)}}/>
                    <button  className="btn btn-secundary btn-sm" onClick={(e) => {this.handleClick(e)}}><img src={lupa} alt="lupa"/></button>
                    <Desplegable onActive={this.handleOnActive} generos={BancoPeliculas.genres}/>
                    <span> Ordenar</span>
                    
                    <Filtro onActive={this.handleOnActiveFiltro} fechas={BancoPeliculas.results.release_date} votos={BancoPeliculas.results.vote_average}/>
                    
                </div>


         <div className="container-fluid m-2 p-2 ">  
          <div className="row">
            {busquedaPeliculas.length > 0 ? busquedaPeliculas.map(pelicula => (
                
                <Pelicula id={pelicula.id} key= {pelicula.id} titulo={pelicula.title} info={pelicula} 
                genero={ generos(pelicula.genre_ids)} />

            )) : (<div>Loading...</div>)
            }
            </div>
          </div>

        </div>

        

        );
    }
   
}


// Metodo POST :
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
  
async function dbPeliculas (busqueda1, generos1, fecha1) {

    const res= await postData('http://localhost:3000/peliculas', {
    busqueda: busqueda1,
    generos: generos1,
    fecha: fecha1
    })

    return res;

}


const res=postData('http://localhost:3000/peliculas', {
    busqueda: "el",
    generos: [14],
    fecha: "0"
})
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });


function generos(ids) {

    let generos=[]
  
    ids.map(cantidad=> 
        generos.push(BancoPeliculas.genres.filter(busqueda => busqueda.id ===cantidad)[0].name))
    
    return generos.join(',')
}




export default Ejercicio3;