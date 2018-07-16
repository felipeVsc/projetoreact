import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Assuntos from './Assuntos';
import Fundo from './Fundo';
import Aulas from './proxAulas';
import Infos from './infos';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<div>
    <Fundo/>
    <Aulas/>
    <App/>
    <Infos/>
    <Assuntos/>
    
    
    </div>, document.getElementById('root'));
registerServiceWorker();
