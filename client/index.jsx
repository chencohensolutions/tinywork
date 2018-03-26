import Promise from 'es6-promise';      //polyfill promise to work with old explorer
import 'whatwg-fetch';                  //polyfill es6 fetch to work with old explorer and new safari
import ReactDOM from 'react-dom';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory';

import Shell from "views";

const browserHistory = createBrowserHistory();

Promise.polyfill();

import './index.scss';

render(
    <Router history={browserHistory}>
        <Route path="/" component={Shell}></Route>
    </Router>, document.getElementById('root'));