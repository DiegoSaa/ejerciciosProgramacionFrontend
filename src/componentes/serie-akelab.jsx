import React, { Component } from 'react';

//componente de la pagina para mostrar la serie AKELAB
class SerieAkelab extends Component {
    state = {  

        valor:0,
        salida: "Click para mostrar secuencia AKELAB"
    }

    handleChange = (e) =>{
        this.setState({valor: e.target.value})
        var letterNumber = /^[1-9][0-9]*$/;
        if(!e.target.value.match(letterNumber)){
            this.setState({salida: "valor invalido"})

        }else{
            this.setState({salida: "valor valido"})

        }
    }

    handleClick = (e) =>{
        this.setState({salida: secuencia(this.state.valor)})
        console.log('handle change called')
    }


    render() { 
        return (
             <div>
                <h1>Secuencia AKELAB</h1>
                <input onChange={(e) => {this.handleChange(e)}}/>
                <button  className=" btn btn-primary btn-sm" onClick={(e) => {this.handleClick(e)}}>Mostrar serie</button>
                <p>{this.state.salida}</p>
            </div>
            );
    }   
}

//funcion para generar la secuencia akelab por medio de un numero
function secuencia(num) {


    let salida=[]


    for (let i = 1; i <= num; i++) {
        
        if(i%3===0 && i%5===0){

            salida.push("AKELAB")

        } else if(i%3===0){

            salida.push("AKE")
        } else if(i%5===0){

            salida.push("LAB")
        } else{

            salida.push(String(i))
        }

        
    }

    return salida.join(', ')
}




export default SerieAkelab;