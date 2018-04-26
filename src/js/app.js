import React, { Component } from 'react';
import { render } from 'react-dom';
import cheerio from 'cheerio';

import '../css/style.css';
import keenImage from '../assets/keen.png';
import rp from 'request-promise';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import reducer from './reducer';


import BoxCon from './container/box-container.js';

// import configureStore from '../store/configureStore';

// const store = createStore(reducer, compose(
//   applyMiddleware(thunk),
//   window.devToolsExtension ? window.devToolsExtension() : f => f 
// ));

// const store = configureStore();

export default class Hello extends Component {

  render() {
    return (
      <div>
        Hello from react
        <img src={ keenImage } alt='Commander Keen' />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));