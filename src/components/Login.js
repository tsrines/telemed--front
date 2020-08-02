import React from 'react';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';


class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let formData = this.state;
    this.props.login(formData);
    this.setState({
      email: '',
      password: '',
    });
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
              <Button onClick={this.formData} color='red' fluid size='large'>
                Login
              </Button>
            </Segment>

          </Form>
          Don't have an account? {" "}
          <Link to='/signup'>Sign Up!</Link>
        </Grid.Column>
      </Grid>
    );
  }
}

export default withRouter(Login);
