import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// components
import ComponenteEventos from './components/componenteEventos';
import MouseColor from './components/mouseColor';

ReactDOM.render(
	<div>
		<ComponenteEventos />
		<MouseColor / >
	</div>
	, document.getElementById('root'));
registerServiceWorker();
