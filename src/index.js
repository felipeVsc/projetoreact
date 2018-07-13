import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Assuntos from './Assuntos';
import Fundo from './Fundo';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<div><Fundo/><App /><Assuntos/></div>, document.getElementById('root'));
registerServiceWorker();
