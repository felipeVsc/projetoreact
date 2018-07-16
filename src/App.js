import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="bordaFora"> 
        <div className="App">
          <div className="App-palavras">
          <p>Turmas</p>
          </div> 
          
          <div className="centralizarTexto">
            <Nav vertical>
            <NavItem>
              <NavLink href="#">913A</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">912A</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">911A</NavLink>
            </NavItem>
          </Nav>
          </div>
        
        </div>
        </div>
    );
  }
}

export default App;

