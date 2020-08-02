import React from 'react';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    passwordConfirmation: '',
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    let formData = this.state;
    if (this.state.password !== this.state.passwordConfirmation) {
      alert("Passwords don't match");
      this.setState({ password: '', passwordConfirmation: '' });
    } else {
      this.props.signUp(formData);
      this.setState({
        email: '',
        password: '',
        passwordConfirmation: '',
      });
    }
  };

  render() {
    return (
      <Grid
        textAlign='center'
        style={{ height: '100vh' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='red' textAlign='center'>
            Telemed
            <Image src='../favicon.ico' />
          </Header>
          <br />
          <br />
          <Form onSubmit={(e) => this.onSubmit(e)} size='large'>
            <Segment stacked>
              <Form.Input
                onChange={(e) => this.onChange(e)}
                name='email'
                value={this.state.email}
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail address'
              />
              <Form.Input
                onChange={(e) => this.onChange(e)}
                name='password'
                value={this.state.password}
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />
              <Form.Input
                onChange={(e) => this.onChange(e)}
                name='passwordConfirmation'
                value={this.state.passwordConfirmation}
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password Confirmation'
                type='password'
              />
              <Button onClick={this.formData} color='red' fluid size='large'>
                Sign Up
              </Button>
            </Segment>
          </Form>
          Already have an account? <Link to='/login'>Login!</Link>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignUp;
