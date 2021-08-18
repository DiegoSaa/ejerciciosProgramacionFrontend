import React, { useState } from 'react';


const SerieFibonacci = ()=> {
    

    const [valor, setValor]=useState(0)

    const [salida, setSalida]=useState("Click para mostrar serie")

    const handleChange = (e) =>{

        setValor(e.target.value)

        var letterNumber = /^[1-9][0-9]*$/;

        if(!e.target.value.match(letterNumber)){
            setSalida("valor invalido")

        }else{
            setSalida("valor valido")

        }
    }

    const handleClick = (e) =>{
        setSalida(fibonacci(valor))
    }

    
    return (
        <div>
            <h1>Serie de Fibonacci</h1>
            <div>
                <input onChange={(e) => {handleChange(e)}}/>
                <button  className="btn btn-primary btn-sm" onClick={(e) => {handleClick(e)}}>Mostrar serie</button>
            </div>
            <p>{salida}</p>
        </div>
        );
      
}

function fibonacci(num) {

    let numero1 = 0, numero2 = 1, siguiente;

    let salida=[]


    for (let i = 1; i <= num; i++) {

        siguiente = numero1 + numero2;
        numero1 = numero2;
        numero2 = siguiente;

        salida.push(String(numero1))
    }

    return salida.join(', ')
}

export default SerieFibonacci;

 



