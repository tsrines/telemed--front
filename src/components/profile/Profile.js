import React from 'react';

import { Header, Divider, Card, Icon, Container } from 'semantic-ui-react';

import DoctorCard from '../DoctorCard';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Profile = ({ currentUser, loadUser, history, loading }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const profileDoctors = () =>
    currentUser.doctors &&
    currentUser.doctors.map((doc) => <DoctorCard key={doc.id} doctor={doc} />);

  return (
    <>
      {currentUser !== undefined && (
        <Container text>
          {currentUser !== undefined && (
            <>
              <Header as='h2' display='flex' textAlign='center' color='red'>
                Welcome,{' '}
                {currentUser.email ? currentUser.email.split('@')[0] : 'User'}{' '}
                <Link to={'/profile/edit'}>
                  <Icon
                    size='tiny'
                    loading={loading}
                    fluid='true'
                    name='edit'
                  ></Icon>
                </Link>
              </Header>
            </>
          )}
          <Divider />{' '}
          <Header as='h2' display='flex' textAlign='center' color='red'>
            Favorite Doctors
          </Header>
          <Divider />
          <Card.Group
            style={{ overflow: 'auto', maxHeight: '52em' }}
            display='flex'
            justify-content='center'
            itemsPerRow={3}
          >
            {profileDoctors()}
          </Card.Group>
        </Container>
      )}
    </>
  );
};

Profile.propTypes = {
  loadUser: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default Profile;
