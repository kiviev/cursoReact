import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// components
import FechaHora from './components/fechahora';


ReactDOM.render(
	<FechaHora />,
	document.getElementById('root'));
registerServiceWorker();
