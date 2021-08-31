import React from "react";
import "./stylesMenu.css";

import "bootstrap/dist/css/bootstrap.min.css";

import SerieAkelab from "../pages/serie-akelab.jsx";
import SerieFibonacci from "../pages/serie-fibonacci.jsx";
import Ejercicio3 from "../pages/pagina-peliculas";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className='list-group list-group-horizontal'>
            <li className='list-group-item'>
              <Link to='/'>Ejercicio1</Link>
            </li>
            <li className='list-group-item'>
              <Link to='/ejercicio2'>Ejercicio2</Link>
            </li>
            <li className='list-group-item'>
              <Link to='/ejercicio3'>Ejercicio3</Link>
            </li>
          </ul>
        </nav>

        {/* Switeches de la aplicación */}
        <Switch>
          <Route path='/ejercicio2'>
            <SerieAkelab />
          </Route>
          <Route path='/ejercicio3'>
            <Ejercicio3 />
          </Route>
          <Route path='/'>
            <SerieFibonacci />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
