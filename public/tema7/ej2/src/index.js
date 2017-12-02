import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Calculadora from './components/Calculadora'

ReactDOM.render(<Calculadora />, document.getElementById('root'));
registerServiceWorker();
