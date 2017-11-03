import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// components
import Formulario from './components/formulario';

ReactDOM.render(
	<Formulario />

	, document.getElementById('root'));
registerServiceWorker();
