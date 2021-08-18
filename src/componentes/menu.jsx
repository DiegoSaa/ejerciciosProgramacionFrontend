import React  from 'react';
import "./stylesMenu.css"

import 'bootstrap/dist/css/bootstrap.min.css';

import SerieAkelab from './serie-akelab.jsx';
import SerieFibonacci from './serie-fibonacci.jsx';
import Ejercicio3 from './pagina-peliculas';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function App() {
    return (
      <Router>
        <div>
          <nav>
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item">
                <Link to="/">Ejercicio1</Link>
              </li>
              <li className="list-group-item">
                <Link to="/ejercicio2">Ejercicio2</Link>
              </li>
              <li className="list-group-item">
                <Link to="/ejercicio3">Ejercicio3</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/ejercicio2">
              <Ejercicio2 />
            </Route>
            <Route path="/ejercicio3">
              <Ejercicio3 />
            </Route>
            <Route path="/">
              <Ejercicio1 />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  function Ejercicio1() {
    return (
    <React.Fragment>
        <h2>Ejercicio 1</h2>;
        <SerieFibonacci/>
    </React.Fragment>
    );
  }
  
  function Ejercicio2() {
    return (
      <React.Fragment>
        <h2>Ejercicio 2</h2>;
        <SerieAkelab/>
    </React.Fragment>
    );
  }