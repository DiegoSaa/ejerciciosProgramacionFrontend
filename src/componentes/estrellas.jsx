import React from "react";
import estrellaOn from "../data/Star 3.png";
import estrellaOff from "../data/Star 5.png";

const Estrellas = (props) => {
  let numero = Math.ceil(props.estrellas / 2) + 1;

  const itemsEstrellas = [];

  for (let index = 1; index <= 5; index++) {
    if (numero <= index) {
      itemsEstrellas.push(
        <img
          id={index}
          key={index}
          src={estrellaOff}
          width='10'
          height='10'
          alt={index}
        />
      );
    } else {
      itemsEstrellas.push(
        <img
          id={index}
          key={index}
          src={estrellaOn}
          width='10'
          height='10'
          alt={index}
        />
      );
    }
  }

  return <div>{itemsEstrellas}</div>;
};

export default Estrellas;
