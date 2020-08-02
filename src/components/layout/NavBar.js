import React from 'react';
import { Button, Header, Image, List, Divider } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

const NavBar = ({ history, currentUser, logout }) => {
  const guestButtons = (
    <>
      <List floated='right' horizontal>
        <Button
          content='Login'
          onClick={() => history.push('/login')}
          color='red'
        />
        <Button
          content='Sign Up'
          onClick={() => history.push('/signup')}
          color='red'
        />
      </List>
    </>
  );

  const authButtons = (
    <List floated='right' horizontal>
      <Button
        onClick={() => history.push('/search')}
        color='red'
        content='Search'
      />

      <Button
        content='Profile'
        onClick={() => history.push('/profile')}
        color='red'
      />
      <Button content='Logout' color='red' onClick={logout} />
    </List>
  );
  return (
    <>
      <h1>
        <Link to='/'>
          <Header floated='left' as='h2' color='red' textAlign='center'>
            Telemed
            <Image src='../favicon.ico' />
          </Header>
        </Link>
      </h1>

      {currentUser && currentUser.id ? authButtons : guestButtons}
      <Divider hidden />
    </>
  );
};

export default withRouter(NavBar);
