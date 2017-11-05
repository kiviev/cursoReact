import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import ToDoForm from './componentes/ToDoForm';
// import {ToDoForm} from './componentes/index';

ReactDOM.render(
			<App />
			, 
			document.getElementById('root')
	);
registerServiceWorker();
