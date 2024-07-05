import React, { Component } from 'react';
import { Provider, defaultTheme, View, Heading, Form, TextField, Button } from '@adobe/react-spectrum';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: '',
      email: ''
    };
  }

  handleSave = () => {
    const { data, name, email } = this.state;
    this.setState({ data: [...data, { name, email }] });
  };

  render() {
    return (
      <Provider theme={defaultTheme}>
        <View padding="size-200">
          <Heading level={1}>Hava Havai Form</Heading>
          <Form>
            <TextField label="Name" value={this.state.name} onChange={(value) => this.setState({ name: value })} placeholder="Enter your name" />
            <TextField label="Email" value={this.state.email} onChange={(value) => this.setState({ email: value })} placeholder="Enter your email" />
            <Button variant="cta" onPress={this.handleSave}>Save</Button>
          </Form>
          <Heading level={2}>Saved Data</Heading>
          <ul>
            {this.state.data.map((item, index) => (
              <li key={index}>{item.name} - {item.email}</li>
            ))}
          </ul>
        </View>
      </Provider>
    );
  }
}

export default App;
