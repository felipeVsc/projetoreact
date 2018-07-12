import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Assuntos from './Assuntos';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><App /><Assuntos/></div>, document.getElementById('root'));
registerServiceWorker();