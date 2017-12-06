import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// componentes
import { MyNav} from './componentes/index';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
		
			<MyNav />
		
			, 
			document.getElementById('root')
	);
registerServiceWorker();
