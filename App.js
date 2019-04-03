
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Routes from './src/routes/Routes';
import reducers from './src/reducers';


export default class App extends Component {
  
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyDZSFc-Y_TvoZEEr4hURwm_lKGXnNNifF8",
      authDomain: "whatsapp-clone-4c4b2.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-4c4b2.firebaseio.com",
      projectId: "whatsapp-clone-4c4b2",
      storageBucket: "whatsapp-clone-4c4b2.appspot.com",
      messagingSenderId: "748807201710"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}