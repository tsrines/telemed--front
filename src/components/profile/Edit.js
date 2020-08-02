import React, { Component } from 'react';

import { Form, FormField, Input, Confirm, FormButton } from 'semantic-ui-react';

export default class Edit extends Component {
  state = { open: false, result: 'show the modal to capture a result' };

  show = () => this.setState({ open: true });
  handleConfirm = (e) => {
    this.props.editProfileOnSubmit(e);
    this.setState({ result: 'confirmed', open: false });
  };
  handleCancel = () => this.setState({ result: 'cancelled', open: false });

  render() {
    const { open } = this.state;

    return (
      <Form
        style={{ padding: '3em' }}
        // onSubmit={this.props.editProfileOnSubmit}
        display='flex'
      >
        <FormField>
          <Input
            label='First Name'
            placeholder={
              this.props.currentUser && this.props.currentUser.first_name
                ? this.props.currentUser.first_name
                : 'John'
            }
            labelPosition='left'
            type='text'
            value={this.props.currentUser.first_name || ''}
            name={'first_name'}
            onChange={this.props.editProfileOnChange}
          />
        </FormField>
        <FormField>
          <Input
            label='Last Name'
            placeholder={
              this.props.currentUser && this.props.currentUser.last_name
                ? this.props.currentUser.last_name
                : 'Doe  '
            }
            labelPosition='left'
            type='text'
            value={this.props.currentUser.last_name || ''}
            name='last_name'
            onChange={this.props.editProfileOnChange}
          />
        </FormField>
        <FormField>
          <Input
            label='Email'
            placeholder={
              this.props.currentUser && this.props.currentUser.email
                ? this.props.currentUser.email
                : 'Email...'
            }
            labelPosition='left'
            type='email'
            value={this.props.currentUser.email || ''}
            name='email'
            onChange={this.props.editProfileOnChange}
          />
        </FormField>
        <FormField>
          <Input
            label='Address'
            placeholder={
              this.props.currentUser
                ? this.props.currentUser.address
                  ? this.props.currentUser.address
                  : '123 Main Street'
                : null
            }
            labelPosition='left'
            type='text'
            value={this.props.currentUser.address || ''}
            name='address'
            onChange={this.props.editProfileOnChange}
          />
        </FormField>

        <FormButton
          content='Submit'
          color='red'
          loading={this.props.loading}
          onClick={this.show}
        />
        <Confirm
          // onConfirm={this.props.editProfileOnSubmit}
          content={'Satisfied with your changes?'}
          open={open}
          type='submit'
          onCancel={this.handleCancel}
          onConfirm={(e) => this.handleConfirm(e)}
        />
      </Form>
    );
  }
}
