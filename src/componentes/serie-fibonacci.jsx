import React, { Component } from 'react';

//componente del ejercicio 1, para crear la pagina que se encarga de generar la serie de fibonacci
class SerieFibonacci extends Component {
    state = {  

        valor:0,
        salida: "Click para mostrar serie"
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
        this.setState({salida: fibonacci(this.state.valor)})
        console.log('handle change called')
    }

    

    render() { 
        return (
            <div>
                <h1>Serie de Fibonacci</h1>
                <div>
                    <input onChange={(e) => {this.handleChange(e)}}/>
                    <button  className="btn btn-primary btn-sm" onClick={(e) => {this.handleClick(e)}}>Mostrar serie</button>
                </div>
                <p>{this.state.salida}</p>
            </div>
            );
    }   
}

//Se encarga de crear la serie Fibonacci completa
function fibonacci(num) {

    let numero1 = 0, numero2 = 1, siguiente;

    let salida=[]


    for (let i = 1; i <= num; i++) {
        console.log(numero1);
        siguiente = numero1 + numero2;
        numero1 = numero2;
        numero2 = siguiente;

        salida.push(String(numero1))
    }

    return salida.join(', ')
}




export default SerieFibonacci;