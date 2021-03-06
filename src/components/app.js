import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

export default class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      socialMedia: [{
        name: 'facebook',
        url: ''
      }, {
        name: 'twitter',
        url: ''
      }, {
        name: 'instagram',
        url: ''
      }]
    };
  }

  render () {
    return this.props.children;
  }
}
