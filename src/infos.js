import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';

class Infos extends Component {
  render() {
    return (
    <div className="geralDiv">
      <div className="bordaFora">
        <div className="info">
        <p className="App-palavras">Infos</p>
        <div className="centralizarTexto">
        <Nav vertical>
                        <NavItem>
                            <NavLink href="#">Secretaria</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Histórico</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Documentos</NavLink>
                        </NavItem>
                     </Nav>

        
        </div>
        </div>
        </div>
        </div>
    );
  }
}

export default Infos;