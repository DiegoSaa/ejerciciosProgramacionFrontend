import { Dropdown, Nav, Button } from 'react-bootstrap'
import React, { Component } from 'react';

//experimentando con react-bootstrap
class Menu extends Component {
  render() {
    return (
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    );
  }
}

export default Menu;