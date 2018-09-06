import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Noticias from './noticias';
import Assuntos from './Assuntos';
import Fundo from './Fundo';
import Infos from './infos';
import AlertaBim from './AlertaBim';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<div>
    <AlertaBim/>    
    <Fundo/>  
    <Noticias/>
    <Infos/>
    <App/>
    <Assuntos/>
    
    
    
    </div>, document.getElementById('root'));
registerServiceWorker();
