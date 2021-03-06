import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route,
    Routes
  } from 'react-router-dom';
import './index.css';
import App from './App';
import Minesweeper from './Minesweeper';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/minesweeper" element={<Minesweeper/>}/>
    </Routes>
  </Router>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
