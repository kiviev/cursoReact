import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// components
import FechaHora from './components/fechahora';


ReactDOM.render(
	<div>
		<div className="reloj"><FechaHora interval="5000" /></div>
		<div className="reloj"><FechaHora interval="10000" /></div>
		<div className="reloj"><FechaHora interval="1000" /></div>
	</div>,
	document.getElementById('root'));
registerServiceWorker();
