import React, { Component } from 'React';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { text: '' };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
          value={this.state.text}
          onChangeText={ text => this.setState({ text })} />
        </CardSection>
        <CardSection>
        </CardSection>
        
        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;

// TextInput --> User types text --> onChangeText event called --> 'setState' with new text --> Component renders --> When TextInput renders, we will tell it that its value is 'this.state.text' --> goes back to TextInput & process happens all over again
