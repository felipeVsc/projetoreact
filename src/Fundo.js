import React, { Component } from 'react';
import logoIFAL from './logoIFAL.png';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';

class Fundo extends Component{
    render() {
        return (
            <div>
                <center>
                <img src={logoIFAL} alt="logoIFAL" className="tamanhoImagem"/>;
                </center>
            </div>
        )
    }
}

export default Fundo;