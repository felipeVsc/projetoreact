import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Assuntos from './Assuntos';
import Fundo from './Fundo';
import Aulas from './proxAulas';
import Infos from './infos';
import AlertaBim from './AlertaBim';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<div>
    <AlertaBim/>    
    <Fundo/>
    
    <App/>
    <Infos/>
    <Assuntos/>
    
    
    </div>, document.getElementById('root'));
registerServiceWorker();
