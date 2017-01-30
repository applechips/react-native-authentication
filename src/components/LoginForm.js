import React, { Component } from 'React';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: ''};

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: ''});
    // if failed to login once and attempted to login again, the error message will clear

    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(() => {
        this.setState({ error: 'Authentication Failed'});
      });
    });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
          placeholder="user@gmail.com"
          label="Email"
          value={this.state.email}
          onChangeText={ email => this.setState({ email })} />
        </CardSection>

        <CardSection>
          <Input
          secureTextEntry
          placeholder="password"
          label="Password"
          value={this.state.password}
          onChangeText={ password => this.setState({ password })} />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}
export default LoginForm;

// TextInput --> User types text --> onChangeText event called --> 'setState' with new text --> Component renders --> When TextInput renders, we will tell it that its value is 'this.state.text' --> goes back to TextInput & process happens all over again
