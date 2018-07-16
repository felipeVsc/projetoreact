import React, { Component } from 'react';
import logoIFAL from './logoIFAL.png';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';

class Fundo extends Component{
    render() {
        return (
            <div>

                
                <img src={logoIFAL} alt="logoIFAL" className="tamanhoImagem"/>;
                <div className="fundo">

                    <Nav>
                        <NavItem>
                            <NavLink href="#">Boletim</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Histórico</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className="tt">Alunos</NavLink>
                        </NavItem>
                     </Nav>

                </div>
            </div>
        )
    }
}

export default Fundo;