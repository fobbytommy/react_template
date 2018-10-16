import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// bootstrap 4 css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Main from './core/Main';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
