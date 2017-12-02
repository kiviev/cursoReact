import component from './component';

import React from 'react';
import ReactDOM from 'react-dom';



document.body.appendChild(component('holita vecinito'));
const content = document.createElement('div');
content.setAttribute('id' , 'content');
document.body.appendChild(content);

const App = function() {

let date = new Date();
 
setInterval(() => {
	content.innerHTML = new Date();
} , 1000)

 }

content.innerHTML = App();