import React from 'react';
import estrellaOn from "../data/Star 3.png";
import estrellaOff from "../data/Star 5.png";

//componente para crear el promedio de estrellas segun la calificacion de la pelicula
const Estrellas=(props)=>{

    let numero=Math.round(props.estrellas/2);

    const estrellas = [false, false, false, false, false] 

    const itemsEstrellas = []

    for (const [index] of estrellas.entries()) {
        
        if(numero<=index){

            itemsEstrellas.push(
                    <img  id={index}  key={index} src={estrellaOff} width="10" height="10" alt={index} />
            )
        }else{

            itemsEstrellas.push(
                    <img  id={index} key={index} src={estrellaOn}  width="10" height="10" alt={index}/>
            )
        }
    }

    return ( 
        <div >     
            { itemsEstrellas}
                
        </div>
    );
    
}
 
export default Estrellas;
