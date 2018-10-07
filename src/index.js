import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './components/Router';
import registerServiceWorker from './registerServiceWorker';
// bootstrap 4 css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
