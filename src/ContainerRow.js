import React, { Component } from 'react';
import Infos from './infos';
import Assuntos  from './Assuntos'
import App from './App';
import Fundo from './Fundo';
import Aulas from './proxAulas';
import './App.css';

class ContainerRow extends Component {
 render(){
    return (
        <div className='rowC'>
           <Fundo/>
    <Aulas/>
    <App/>
           <Infos/>
           <Assuntos/>

        </div>
    );
    }
 }

 export default ContainerRow;