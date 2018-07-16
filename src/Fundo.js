import React, { Component } from 'react';
import logoIFAL from './logoIFAL.png';
import './App.css';

class Fundo extends Component{
    render() {
        return (
            <div>

                
                <img src={logoIFAL} alt="logoIFAL" className="tamanhoImagem"/>;
                <div className="fundo">
                    
                    <p className="espacamentoSair">Sair</p>

                </div>
            </div>
        )
    }
}

export default Fundo;