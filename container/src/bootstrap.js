import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'marketing/MarketingApp';

console.log(mount);

ReactDOM.render(<App/>, document.querySelector('#root'));
