import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import firebase from 'firebase'
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBP1yGoEq0IDRj66xSxsk9ZePrnTY2xSiA',
      authDomain: 'authentication-ffa41.firebaseapp.com',
      databaseURL: 'https://authentication-ffa41.firebaseio.com',
      storageBucket: 'authentication-ffa41.appspot.com',
      messagingSenderId: '693466227252'
    });

    // know if user signed in or signed out
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  
  render() {
    return (
      <View>
      <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}

export default App ;
