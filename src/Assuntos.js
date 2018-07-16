import React, { Component } from 'react';
import './App.css';

class Assuntos extends Component{
    render (){
        return (
            <div className="bordaFora"> 
                <div className="Assuntos">                  
                    <p className="App-palavras">Assuntos</p>
                    <div className="centralizarTexto">
                    <p>Programação</p>
                    <p>Geometria</p>
                    <p>Ingles</p>
                    </div>
        
                </div>
                </div>
        )
    }
}

export default Assuntos;