import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import firebase from 'firebase'
import LoginForm from './components/LoginForm';


class App extends Component {
  // null = no idea if you're logged in or not.. so we'll find out!
  state = { loggedIn: null };

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

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.buttonContainerStyle}>
            <Button onPress={() => firebase.auth().signOut()}>
            Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication"/>
      {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  buttonContainerStyle: {
    flexDirection: 'row'
  }
}
export default App ;
