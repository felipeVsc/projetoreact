import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';

class Assuntos extends Component{
    render (){
        return (
            <div className="geralDiv">
            <div className="bordaFora"> 
            
                <div className="Assuntos">                  
                    <p className="App-palavras">Assuntos</p>
                    <div className="centralizarTexto">
                    <Nav vertical>
                        <NavItem>
                            <NavLink href="#">Programacao</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Geometria</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Historia</NavLink>
                        </NavItem>
                    </Nav>
                    </div>
        
                </div>
            
                </div>
                </div>
        )
    }
}

export default Assuntos;