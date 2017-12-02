import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import VideoComponent from './components/video';

ReactDOM.render(<VideoComponent />, document.getElementById('root'));
registerServiceWorker();
