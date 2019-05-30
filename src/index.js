import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import About from './Component/about/About'
import Home from './Component/home/Home'
const routing = (
    <Router>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Component/about">About</Link>
            </li>
            <li>
                <Link to="/Component/home">Home</Link>
            </li>
        </ul>

        <div>
            <Route exact path="/" component={App} />
            <Route path="/Component/about" component={About} />
            <Route path="/Component/home" component={Home} />
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
